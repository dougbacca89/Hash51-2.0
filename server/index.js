require('dotenv').config();
const path = require('path');
const express = require('express');

const session = require('express-session');
const passport = require('passport');
const { serverRouter } = require('./routes/routes');

// const passportLocalMongoose = require('passport-local-mongoose');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const findOrCreate = require('mongoose-findorcreate');

// const { Tasks } = require('./db');

const port = 3000;
const distPath = path.resolve(__dirname, '../client/dist');
// eslint-disable-next-line no-console
console.log(distPath);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));
app.use('/routes/routes', serverRouter);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());

app.use(passport.session());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});
