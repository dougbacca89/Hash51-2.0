const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  title: String,
  photographer: String,
  description: String,
  imageUrl: String,
  location: String,
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
