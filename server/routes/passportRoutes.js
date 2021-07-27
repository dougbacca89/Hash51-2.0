/* eslint-disable no-console  */
/* eslint-disable no-unused-vars  */

const { Router } = require('express');
const passport = require('passport');
const path = require('path');
const cors = require('cors');


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
        res.status(200).redirect('/userLogin');
      });
    }
  });
});

passportRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const user = new User({ username, password });
  req.login(user, err => {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      passport.authenticate('local')(req, res, (error, result) => {
        // console.log('THIS IS REQ', req);
        res.status(200).send(req.user);
    });
  }
  });
});

// passportRouter.get('/', (req, res) => {
//   console.log(req);
//   console.log(req.user);
//   res.sendFile(path.resolve(__dirname, '../client/dist/index.html'), { user: req });
// });

passportRouter.get('/logout', (req, res) => {
  req.logout();
  console.log('user successfully logged out');
});

// Google Strategy //

passportRouter.get('/auth/google',
passport.authenticate('google', { scope: ['profile', 'email'] }),
(req, res) => res.status(200).send(req.user));


passportRouter.get('/auth/google/login',
passport.authenticate('google', { failureRedirect: 'http://localhost:3000/error' }),
(req, res) => {
const user = {...req.user};
console.log(user);
res.redirect('/userLogin');
});



module.exports = {
  passportRouter,
};
