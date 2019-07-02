const mongoose = require('mongoose');

const requestableSchema = mongoose.Schema({
  requestable_name: String,
  worth: Number
}, {
  timestamps: true
});
const requestModel = mongoose.model('requestables', requestableSchema);

module.exports = requestModel;
