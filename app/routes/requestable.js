const app = module.exports = require('express')();

const { getAllRequestable, addRequestable, getRequestableById } = require('../actions').requestable;

app.get('/', (req, res) => {
  getAllRequestable()
    .then((users) => {
      res.json(users);
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
    .then((user) => {
      res.json(user);
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
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get requestable', err
        }
      );
    })
});
