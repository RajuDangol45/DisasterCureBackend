const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllHelps, getHelpById, addHelp, deleteHelp, updateHelp } = require('../actions').help;

app.get('/', (req, res) => {
  getAllHelps()
    .then((helps) => {
      res.json(helps);
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
    .then((help) => {
      res.json(help);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add help', err
        }
      );
    })
});

app.get('/:id', tokenChecker.checkToken, (req, res) => {
  getHelpById(req.params.id)
    .then((help) => {
      res.json(help);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get help', err
        }
      );
    })
});

app.post('/delete', (req, res) => {
  deleteHelp(req.body.id)
  .then((help) => {
    res.json(help);
  })
  .catch((err) => {
    res.status(400).send(
      {
        msg: 'Failed to delete help', err
      }
    );
  })
});

app.post('/update', (req, res) => {
  updateHelp(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to update help', err
        }
      );
    })
});
