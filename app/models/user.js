const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  age: Number,
  photo: String
}, {
  timestamps: true
});
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
