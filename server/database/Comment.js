const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  imageId: Number,
  userId: Number,
  text: String,
  author: String
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment, CommentSchema } ;
