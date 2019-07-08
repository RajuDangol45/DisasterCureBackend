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

function getUserByEmail(email){
  return userModel.find({email: email}).exec();
}

function updateUser(user){
  return userModel.findByIdAndUpdate(user.id, user,{new: true});
}

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  getUserByEmail,
  updateUser
}
