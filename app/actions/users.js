const userModel = require('../models/user');

function getAllUsers() {
  return userModel.find().exec();
}

function addUser(userBody) {
  let user = new userModel(userBody);
  return user.save();
}

function getUserById(userId) {
  return userModel.findById(userId).exec();
}

module.exports = {
  getAllUsers,
  addUser,
  getUserById
}
