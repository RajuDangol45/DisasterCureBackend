const app = module.exports = require('express')();

const { getAllComments, getCommentById, addComment, getCommentByDisaster } = require('../actions').comments;

app.get('/', (req, res) => {
  getAllComments()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve comments', err
        }
      );
    })
});

app.post('/add', (req, res) => {
  addComment(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add comment', err
        }
      );
    })
});

app.get('/:id', (req, res) => {
  getCommentById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get comment', err
        }
      );
    })
});

app.get('/disaster/:id', (req, res) => {
  getCommentByDisaster(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get comment by disasterId', err
        }
      );
    })
});
