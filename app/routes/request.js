const app = module.exports = require('express')();

const { getAllRequests, getRequestById, addRequest } = require('../actions').request;

app.get('/', (req, res) => {
  getAllRequests()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve requests', err
        }
      );
    })
});

app.post('/add', (req, res) => {
  addRequest(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add request', err
        }
      );
    })
});

app.get('/:id', (req, res) => {
  getRequestById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get request', err
        }
      );
    })
});
