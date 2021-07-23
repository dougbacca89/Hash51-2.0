/* eslint-disable no-console */

import mongoose from 'mongoose';

const passport = require('passport');

const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

// const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost:3000/Hash51';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}).then(() => console.log('Connected to database'))
.catch(err => console.error('Failed to connect to database', err));;

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// eslint-disable-next-line new-cap
const User = new mongoose.model('User', userSchema);

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
  callbackURL: 'http://localhost:3000/auth/google/secrets',
  // userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
}, (accessToken, refreshToken, profile, cb) => {
  // eslint-disable-next-line no-console
  console.log(profile);
  User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user)
  );
}
));








// const TestSchema = new Schema({

// });

// module.exports = {
//   Schema: model('Test', TestSchema),
// };
