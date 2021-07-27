const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  id: Number,
  imageId: Number,
  userId: Number,
  description: String
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment, CommentSchema } ;
