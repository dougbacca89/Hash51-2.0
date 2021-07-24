require('dotenv').config();
const path = require('path');
const express = require('express');

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));
app.use(passport.initialize());
app.use(passport.session());
app.use('/routes/routes', serverRouter);
app.use('/routes/passportRoutes', passportRouter);
app.use('/api/images', Images);
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
  Listening at: http://127.0.0.1:${port}
  `);
});

module.exports = { app };
