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


module.exports = { Evidence, EvidenceSchema };
