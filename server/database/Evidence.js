const mongoose = require('mongoose');

const EvidenceSchema = new mongoose.Schema({
  textBody: String,
  userName: String,
  originalEvidence: String,
});

const Evidence = mongoose.model('Evidence', EvidenceSchema);


module.exports = { Evidence, EvidenceSchema };
