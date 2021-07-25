/* eslint-disable no-console */

// import mongoose from 'mongoose';

const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();

const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost:27017/Hash51';

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  // eslint-disable-next-line no-console
  console.log('Database Connection');
});

// const { Tasks } = require('./db');
// const { Video, Image } = require('./database');

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// eslint-disable-next-line new-cap
const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/login',
  // userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  // proxy: true,
}, (accessToken, refreshToken, profile, cb) => {
  // eslint-disable-next-line no-console
  console.log('within auth');
  console.log(profile);
  // we can use plain mongoose to satisfy this query as well.
  User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user)
  );
}
));

// alt insertion into db
// (accessToken, refreshToken, profile, done) => {
//   User.findOne({ googleId: profile.id }).then((existingUser) => {
//       if (existingUser) {
//           done(null, existingUser);
//       } else {
//           new User({
//               googleId: profile.id,
//           })
//               .save()
//               .then((newUser) => {
//                   done(null, newUser);
//               });
//       }
//   });
// }
// )



module.exports = { User };



// const TestSchema = new Schema({

// });

// module.exports = {
//   Schema: model('Test', TestSchema),
// };
