const express = require('express');
const app = express();

const emailRoutes = require('./services/email');

app.use(express.json());

app.get('/', function (req, res) {
  res.json({
    code: 200,
    app: 'Software Boulevard',
  })
});

app.use('/emails', emailRoutes);

app.listen(3000);

console.log('Running on port 3000');
