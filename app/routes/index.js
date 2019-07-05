const app = module.exports = require('express')();
const jwt = require('jsonwebtoken');
const tokenChecker = require('../middlewares/jwt');
const config = require('../../config');

class HandlerGenerator{
  login(req,res){
    // let email = req.body.email;
    // let password = req.body.password;
    // sample
    let mockUsername = 'test';
    let mockPassword = 'password';

    if(true){
      if(true){
        let token = jwt.sign(
          {
            username: mockUsername
          },
          config.auth.secret,
          {
            expiresIn: '24h'
          }
        );
        res.json({
          success: true,
          message: 'Authentication successful',
          token: token
        });
      } else {
        res.send(403).json({
          success: false,
          message: 'Incorrect username or password'
        });
      }
    }
    else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Check the request'
      });
    }
  }
  index (req, res) {
    res.json({
      success: true,
      message: 'Index page'
    });
  }
}
let handler = new HandlerGenerator();
app.get('/a', tokenChecker.checkToken, handler.index);
app.post('/login', handler.login);

// app.get('/', (req, res) => {
//   res.send({ msg: 'The server is running' });
// });

app.use('/users', require('./users'));
app.use('/disasters', require('./disaster'));
app.use('/comments', require('./comment'));
app.use('/requestable', require('./requestable'));
app.use('/requests', require('./request'));
app.use('/helps', require('./help'));

app.all('*', (req, res) => {
  res.status(404).send({msg: 'Route not found'});
});
