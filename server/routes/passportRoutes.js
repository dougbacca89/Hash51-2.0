/* eslint-disable no-console */

const { Router } = require('express');
const passport = require('passport');


const { User } = require('../database/index');


const passportRouter = Router();

passportRouter.post('/register', (req, res) => {
  const { username, password } = req.body;
  User.register({ username }, password, (err, user) => {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      passport.authenticate('local')(req, res, (err, result) => {
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
      passport.authenticate('local')(req, res, (err, result) => {
        console.log(user);
        res.sendStatus(200);
    });
  }
  });
});


module.exports = {
  passportRouter,
};
