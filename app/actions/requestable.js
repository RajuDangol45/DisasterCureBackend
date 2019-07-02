const requestableModel = require('../models/requestable');

function getAllRequestables() {
  return requestableModel.find().exec();
}

function addRequestable(requestableBody) {
  let user = new requestableModel(requestableBody);
  return user.save();
}

function getRequestableById(requestableId) {
  return requestableModel.findById(requestableId).exec();
}

module.exports = {
  getAllRequestables,
  addRequestable,
  getRequestableById
}
