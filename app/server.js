const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/error-handler');
const cors = require('cors');
const mongoose = require("mongoose");
const path = require('path');

const config = require('../config');
const routes = require('../app/routes');

function run() {
  const app = express();
  app.set('root', `${__dirname}/..`);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(cors());
  app.use(errorHandler);
  app.set('baseUrl', config.backend.url);
  // app.use(express.static('images/users'));
  app.use(routes);
  mongoose.connect(config.orm.db.client + '://' + config.orm.db.connection.host + '/' + config.orm.db.connection.database);
  app.listen(config.server.port, config.server.host, () => {
    console.log(`api available on http://${config.server.host}:${config.server.port}`);
  });
}

module.exports = run;

if (require.main === module) {
  run();
}