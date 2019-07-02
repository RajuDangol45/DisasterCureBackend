const mongoose = require('mongoose');

const requestableSchema = mongoose.Schema({
  requestable_name: String,
  worth: Number
}, {
  timestamps: true
});
const requestModel = mongoose.model('comments', requestableSchema);

module.exports = requestModel;
