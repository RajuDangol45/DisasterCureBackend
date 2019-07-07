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

function deleteHelp(helpId){
  return helpModel.findById(helpId).remove().exec();
}

module.exports = {
  getAllHelps,
  getHelpById,
  addHelp,
  deleteHelp
}
