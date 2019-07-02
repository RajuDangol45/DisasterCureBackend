const app = module.exports = require('express')();

app.get('/', (req, res) => {
  res.send({ msg: 'The server is running' });
});

app.use('/users', require('./users'));
app.use('/disasters', require('./disaster'));
app.use('/comments', require('./comment'));
app.use('/requestable', require('./requestable'));
app.use('/requests', require('./request'));
app.use('/helps', require('./help'));

app.all('*', (req, res) => {
  res.status(404).send({msg: 'Route not found'});
});
