const helpModel = require('../models/help');

function getAllHelps() {
  return helpModel.find().exec();
}

function addHelp(helpBody) {
  let user = new helpModel(helpBody);
  return user.save();
}

function getHelpById(helpId) {
  return helpModel.findById(helpId).exec();
}

module.exports = {
  getAllHelps,
  getHelpById,
  addHelp
}
