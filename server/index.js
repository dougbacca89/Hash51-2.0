require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const MongoStore = require('connect-mongo');
const { serverRouter } = require('./routes/routes');
const { passportRouter } = require('./routes/passportRoutes');
const { userRouter } = require('./routes/userRoutes');

const { mongoUri } = require('./database/index');

// const Store = new MongoStore(session);

// const { User } = require('./database/index');
// const { Video, Image, Comment } = require('./database');

const port = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, '../client/dist');
const app = express();


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static(distPath));

      app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: "Content-Type, Authorization",
        credentials: true
    }));



    app.use(session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: mongoUri })
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/', passportRouter);
    app.use('/routes', serverRouter);
    app.use('/', userRouter);

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
    });


// app.get('/api/images', (req, res) =>{
//   Image.find()
//   .then((images) =>{
//     res.status(200).send(images);
//   })
//   .catch((error) =>{
//     // eslint-disable-next-line no-console
//     console.log('ERROR app.GET /images', error);
//     res.sendStatus(500);
//   });
// });

// app.post('/images', (req, res) =>{
//   Image.
// });

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
  Listening at: http://localhost:${port}
  `);
});

module.exports = { app };
