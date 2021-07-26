const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  photographer: String,
  description: String,
  imageUrl: String,
  location: String,
});

const Image = mongoose.model('Image', ImageSchema);

const saveImage = (image) => {
  const anImage = new Image({
    id: image.id,
    title: image.title,
    photographer: image.photographer,
    description: image.description,
    imageUrl: image.imageUrl,
    location: image.location,
  });
  return Image.findOne({ id: anImage.id }).then((data) => {
    if (data) {
      return data;
    }
    return anImage.save();
  });
};


const retrieveImages = () => Image.find({}, null)
    .then((ret) => ret);


module.exports = Image;
module.exports.saveImage = saveImage;
module.exports.retrieveImages = retrieveImages;
