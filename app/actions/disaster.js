const express = require('express');
const disasterModel = require('../models/disaster');

const app = express();

function getAllDisasters() {
  return disasterModel.find().exec();
}

function addDisaster(disasterBody) {
  let user = new disasterModel(disasterBody);
  return user.save();
}

function getDisaster(disasterID) {
  return disasterModel.findById(disasterID).exec();
}

module.exports = {
  getAllDisasters,
  addDisaster,
  getDisaster
}
