const app = module.exports = require('express')();

const { getAllHelps, getHelpById, addHelp } = require('../actions').help;

app.get('/', (req, res) => {
  getAllHelps()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve helps', err
        }
      );
    })
});

app.post('/add', (req, res) => {
  addHelp(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add help', err
        }
      );
    })
});

app.get('/:id', (req, res) => {
  getHelpById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get help', err
        }
      );
    })
});
