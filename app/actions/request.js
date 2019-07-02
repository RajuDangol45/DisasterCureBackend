const requestModel = require('../models/request');

function getAllRequests() {
  return requestModel.find().exec();
}

function addRequest(requestBody) {
  let user = new requestModel(requestBody);
  return user.save();
}

function getRequestById(requestId) {
  return requestModel.findById(requestId).exec();
}

module.exports = {
  getAllRequests,
  addRequest,
  getRequestById
}
