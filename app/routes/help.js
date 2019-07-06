const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllHelps, getHelpById, addHelp } = require('../actions').help;

app.get('/', tokenChecker.checkToken, (req, res) => {
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

app.post('/add', tokenChecker.checkToken, (req, res) => {
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
