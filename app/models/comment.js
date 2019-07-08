const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  disaster_id: String,
  user_id: String,
  comment: String
}, {
  timestamps: true
});
const commentModel = mongoose.model('comments', commentSchema);

module.exports = commentModel;
