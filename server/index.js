require('dotenv').config();
const path = require('path');
const express = require('express');

const session = require('express-session');
const passport = require('passport');
const { serverRouter } = require('./routes/routes');
const { passportRouter } = require('./routes/passportRoutes');


const port = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, '../client/dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));
app.use(passport.initialize());
app.use(passport.session());
app.use('/routes/routes', serverRouter);
app.use('/routes/passportRoutes', passportRouter);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
  Listening at: http://127.0.0.1:${port}
  `);
});

module.exports = { app };
