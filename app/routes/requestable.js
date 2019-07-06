const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllRequestable, addRequestable, getRequestableById } = require('../actions').requestable;

app.get('/', tokenChecker.checkToken, (req, res) => {
  getAllRequestable()
    .then((requestables) => {
      res.json(requestables);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve requestables', err
        }
      );
    })
});

app.post('/add', tokenChecker.checkToken, (req, res) => {
  addRequestable(req.body)
    .then((requestable) => {
      res.json(requestable);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add requestable', err
        }
      );
    })
});

app.get('/:id', tokenChecker.checkToken, (req, res) => {
  getRequestableById(req.params.id)
    .then((requestable) => {
      res.json(requestable);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get requestable', err
        }
      );
    })
});
