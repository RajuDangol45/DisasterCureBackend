const app = module.exports = require('express')();
const jwt = require('jsonwebtoken');
const config = require('../../config');

const { getUserByEmail } = require('../actions').users;

app.get('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
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
          token: token
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
