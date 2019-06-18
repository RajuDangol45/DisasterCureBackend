const mongoose = require('mongoose');

// const userModel = mongoose.model("users", {
//   firstName: String,
//   lastName: String,
//   password: String,
//   email: String,
//   age: Number
// });

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  age: Number
}, {
  timestamps: true
});
const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
