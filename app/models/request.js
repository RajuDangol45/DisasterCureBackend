const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  requestable_id: String,
  requested_units: Number,
  received_units: Number,
  requested_by: String,
  disaster_id: String,
  request_title: String,
  requested_on: String
}, {
  timestamps: true
});
const requestModel = mongoose.model('requests', requestSchema);

module.exports = requestModel;
