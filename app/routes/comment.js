const app = module.exports = require('express')();
const tokenChecker = require('../middlewares/jwt');

const { getAllComments, getCommentById, addComment, getCommentByDisaster } = require('../actions').comments;

app.get('/', tokenChecker.checkToken, (req, res) => {
  getAllComments()
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to retrieve comments', err
        }
      );
    })
});

app.post('/add', tokenChecker.checkToken, (req, res) => {
  addComment(req.body)
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to add comment', err
        }
      );
    })
});

app.get('/:id', tokenChecker.checkToken, (req, res) => {
  getCommentById(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get comment', err
        }
      );
    })
});

app.get('/disaster/:id', tokenChecker.checkToken, (req, res) => {
  getCommentByDisaster(req.params.id)
    .then((comment) => {
      res.json(comment);
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Failed to get comment by disasterId', err
        }
      );
    })
});
