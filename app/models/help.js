const mongoose = require('mongoose');

const helpSchema = mongoose.Schema({
  request_id: String,
  helped_units: Number,
  helped_by: String,
  help_date: String,
  help_title: String,
  pending: Boolean,
  help_worth: Number
}, {
  timestamps: true
});
const helpModel = mongoose.model('helps', helpSchema);

module.exports = helpModel;
