const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  // id: Number,
  // title: String,
  // photographer: String,
  // description: String,
  // imageUrl: String,
  // location: String,
  // keywords: [String],
  textBody: String,
  userName: String,
  originalEvidence: String,
  // imageThumb: String,
  // nasa_id: String
});

const Evidence = mongoose.model('Evidence', EvidenceSchema);

// const saveEvidence = (evidence) => {
//   const newEvidence = new Evidence({
//     id: evidence.id,
//     title: evidence.title,
//     photographer: evidence.photographer,
//     description: evidence.description,
//     imageUrl: evidence.imageUrl,
//     location: evidence.location,
//     imageThumb: evidence.imageThumb,
//     nasa_id: evidence.nasa_id
//   });
//   return Evidence.findOne({ id: newEvidence.id }).then((data) => {
//     if (data) {
//       return data;
//     }
//     return newEvidence.save();
//   });
// };


// const retrieveImages = () => Image.find({})
//     .then((ret) => ret)
//     .catch((err) =>{
//       // eslint-disable-next-line no-console
//       console.warn(err);
//     });


module.exports = { Evidence, EvidenceSchema };
//  saveEvidence,
// module.exports.saveEvidence = saveEvidence;
// module.exports.retrieveImages = retrieveImages;
