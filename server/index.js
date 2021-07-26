require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
const { serverRouter } = require('./routes/routes');
const { passportRouter } = require('./routes/passportRoutes');

// const { User } = require('./database/index');
const { Images } = require('./api/images');
// const { Video, Image, Comment } = require('./database');

const port = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, '../client/dist');
// eslint-disable-next-line no-console
// console.log(distPath);

const app = express();



// app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.setHeader(
    //     "Access-Control-Allow-Methods",
    //     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    //   );
    //   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    //   next();
    // });


    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(express.static(distPath));

      app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: "Content-Type, Authorization",
        credentials: true
    }));

    // app.use(cors());

    // app.use((req, res, next) => {
    //   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });

    // app.options('*', cors());

    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/', passportRouter);
    app.use('/api/images', Images);
    app.use('/routes/routes', serverRouter);

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
    });

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

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
