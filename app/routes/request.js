const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllRequests, getRequestById, addRequest } = require('../actions').request;

app.get('/', tokenChecker.checkToken, (req, res) => {
  getAllRequests()
    .then((requests) => {
      res.json(requests);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve requests', err
        }
      );
    })
});

app.post('/add', tokenChecker.checkToken, (req, res) => {
  addRequest(req.body)
    .then((request) => {
      res.json(request);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add request', err
        }
      );
    })
});

app.get('/:id', tokenChecker.checkToken, (req, res) => {
  getRequestById(req.params.id)
    .then((request) => {
      res.json(request);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get request', err
        }
      );
    })
});
