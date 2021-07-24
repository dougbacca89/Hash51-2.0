/* eslint-disable no-console  */
/* eslint-disable no-unused-vars  */

const { Router } = require('express');
const passport = require('passport');


const { User } = require('../database/index');


const passportRouter = Router();

// Local Strategy //
passportRouter.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.register({ username }, password, (err, user) => {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      passport.authenticate('local')(req, res, (error, result) => {
        console.log(user);
        res.sendStatus(200);
      });
    }
  });
});

passportRouter.get('/login', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  req.login(user, err => {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      passport.authenticate('local')(req, res, (error, result) => {
        console.log(user);
        res.sendStatus(200);
    });
  }
  });
});

passportRouter.get('/logout', (req, res) => {
  req.logout();
  console.log('user successfully logged out');
});

// Google Strategy //

passportRouter.get('/auth/google', (req, res) => {
  passport.authenticate('google', { scope: ['profile'] });
  });


passportRouter.get('/auth/google/home',
passport.authenticate('google', { failureRedirect: '/login' }),
(req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/');
});



module.exports = {
  passportRouter,
};
