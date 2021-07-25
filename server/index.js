require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
const { serverRouter } = require('./routes/routes');
const { passportRouter } = require('./routes/passportRoutes');


const port = process.env.PORT || 3000;
const distPath = path.resolve(__dirname, '../client/dist');

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

    app.use(cors({
      origin: '*',
      methods: "GET,POST,PATCH,DELETE,PUT",
      allowedHeaders: "Content-Type, Authorization",
  }));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(distPath));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/routes/routes', serverRouter);
    app.use('/', passportRouter);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] })
//   );


// app.get('/auth/google/login',
// passport.authenticate('google', { failureRedirect: '/error' }),
// (req, res) => {
//   // Successful authentication, redirect home.
//   res.redirect('/success');
// });


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
  Listening at: http://localhost:${port}
  `);
});

module.exports = { app };
