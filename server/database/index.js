import mongoose from 'mongoose';

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
// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const TestSchema = new Schema({

// });

// module.exports = {
//   Schema: model('Test', TestSchema),
// };
