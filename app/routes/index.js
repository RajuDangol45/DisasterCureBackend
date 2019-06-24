const app = module.exports = require('express')();

app.get('/', (req, res) => {
  res.send({ msg: 'The server is running' });
});

app.use('/users', require('./users'));
app.use('/disasters', require('./disaster'));

app.all('*', (req, res) => {
  res.status(404).send({msg: 'Route not found'});
});
