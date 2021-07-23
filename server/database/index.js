import mongoose from 'mongoose';

// const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost:3000/Hash51';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// const TestSchema = new Schema({

// });

// module.exports = {
//   Schema: model('Test', TestSchema),
// };
