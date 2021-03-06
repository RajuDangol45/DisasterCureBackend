const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllUsers, addUser, getUserById, updateUser } = require('../actions').users;

app.get('/', (req, res) => {
  getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve users', err
        }
      );
    })
});

app.post('/add', (req, res) => {
  addUser(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add user', err
        }
      );
    })
});

app.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get user', err
        }
      );
    })
});

app.post('/update', (req, res) => {
  updateUser(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to update user', err
        }
      );
    })
});
