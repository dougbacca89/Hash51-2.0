const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

const mongoUri = 'mongodb://localhost:27017/Hash51';

// Create a mongoose connection to out mongo database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// const TestSchema = new Schema({
// //   description: String,
// //   priority: Number,
// //   complete: Boolean,
// // }, { timestamps: true }
// });

// module.exports = {
//   Schema: model('Test', TestSchema),
// };
