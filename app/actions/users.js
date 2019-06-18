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

module.exports = {
  getAllUsers,
  addUser
}
