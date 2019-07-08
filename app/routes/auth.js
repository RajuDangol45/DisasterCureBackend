const app = module.exports = require('express')();
const jwt = require('jsonwebtoken');
const config = require('../../config');

const { getUserByEmail, addUser } = require('../actions').users;

app.get('/login', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  getUserByEmail(email)
    .then((user) => {
      if (user && user[0] && user[0].password && user[0].password === password) {
        let token = jwt.sign({
          email: email
        },
          config.auth.secret,
          {
            expiresIn: '24h'
          });
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token,
          user: user
        });
      } else {
        res.send(
          {
            msg: 'Incorrect email or password', err
          }
        );
      }
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Incorrect email or password', err
        }
      );
    })
});

app.post('/register', (req, res) => {
  const user = req.body;
  getUserByEmail(user.email)
    .then((receivedUser) => {
      if (receivedUser && receivedUser[0]) {
        res.status(400).send(
          {
            msg: 'Email exists', err
          }
        );
      } else {
        addUser(user)
        .then((user)=>{
          res.json({
            success: true,
            message: 'Registration successful!',
            user: user
          });
        });
      }
    })
    .catch((err) => {
      res.status(400).send(
        {
          msg: 'Registration failed', err
        }
      );
    })
});
