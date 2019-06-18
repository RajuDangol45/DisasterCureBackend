const express = require('express');
const userModel = require('../models/user');

const app = express();

function getAllUsers() {
  return userModel.find().exec();
}

function addUser(userBody) {
  let user = new userModel(userBody);
  return user.save();
}

function getUser(userId) {
  return userModel.findById(userId).exec();
}

module.exports = {
  getAllUsers,
  addUser,
  getUser
}
