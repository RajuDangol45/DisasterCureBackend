const disasterModel = require('../models/disaster');

function getAllDisasters() {
  return disasterModel.find().exec();
}

function addDisaster(disasterBody) {
  let user = new disasterModel(disasterBody);
  return user.save();
}

function getDisasterById(disasterID) {
  return disasterModel.findById(disasterID).exec();
}

module.exports = {
  getAllDisasters,
  addDisaster,
  getDisasterById
}
