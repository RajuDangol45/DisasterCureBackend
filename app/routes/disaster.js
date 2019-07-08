const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllDisasters, getDisasterById, addDisaster } = require('../actions').disasters;

app.get('/', (req, res) => {
  getAllDisasters()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve disasters', err
        }
      );
    })
});

app.post('/add', (req, res) => {
  addDisaster(req.body)
    .then((disaster) => {
      res.json(disaster);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add disaster', err
        }
      );
    })
});

app.get('/:id', (req, res) => {
  getDisasterById(req.params.id)
    .then((disaster) => {
      res.json(disaster);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get disaster', err
        }
      );
    })
});
