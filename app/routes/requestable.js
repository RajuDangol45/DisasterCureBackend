const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllRequestables, addRequestable, getRequestableById } = require('../actions').requestable;

app.get('/', (req, res) => {
  getAllRequestables()
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

app.post('/add', (req, res) => {
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

app.get('/:id', (req, res) => {
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
