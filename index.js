const cors = require('cors');
const express = require('express');
const expressValidator = require('express-validator');

const emailRoutes = require('./services/email');
const userRoutes = require('./services/user');
const companyRoutes = require('./services/company');
const authenticationRoutes = require('./services/authentication');

const app = express();

app.use(express.json());
app.use(cors());
app.use(expressValidator());

// Mocking user data;
app.use((req, res, next) => {
  req.user = { id: 'test_user' };
  next();
});

app.get('/', (req, res) => {
  res.json({
    code: 200,
    app: 'Software Boulevard',
  });
});

app.use('/emails', emailRoutes);
app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/authentication', authenticationRoutes);

app.listen(3000, () => {
  console.log('Running on port 3000');
});
