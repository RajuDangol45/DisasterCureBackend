const commentModel = require('../models/comment');

function getAllComments() {
  return commentModel.find().exec();
}

function addComment(commentBody) {
  let user = new commentModel(commentBody);
  return user.save();
}

function getCommentById(commentId) {
  return commentModel.findById(commentId).exec();
}

function getCommentByDisaster(disasterId){
  return commentModel.find({disaster_id: disasterId}).exec();
}

module.exports = {
  getAllComments,
  addComment,
  getCommentById,
  getCommentByDisaster
}
