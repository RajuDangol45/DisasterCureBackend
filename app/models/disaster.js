const mongoose = require('mongoose');

const disasterSchema = mongoose.Schema({
  title: String,
  description: String,
  occurance_date: String,
  injury_count: Number,
  death_count: Number,
  location: String
}, {
  timestamps: true
});
const disasterModel = mongoose.model('disasters', disasterSchema);

module.exports = disasterModel;
