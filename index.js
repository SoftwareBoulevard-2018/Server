const express = require('express');

const app = express();

const cors = require('cors');
const emailRoutes = require('./services/email');
const userRoutes = require('./services/user');
const companyRoutes = require('./services/company');
const loginRoutes = require('./services/login');
const logoutRoutes = require('./services/logout');

const expressValidator = require('express-validator');
const session = require('express-session');

app.use(express.json());
app.use(cors());
app.use(expressValidator());
app.use(session({ secret: 'anything', resave: false, saveUninitialized: true }));
// Middleware to emulate the user request object;v

/* app.use((req, res, next) => {
  if (!req.getValidationResult().isEmpty()) {
    return res
      .status(406)
      .json({
        errors: req.getValidationResult().mapped(),
      });
  }
}); */
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

// Verifies if user is logged in for /users services
app.use('/users', (req, res, next) => {
  if (!req.session.user) {
    return res.status(401)
      .json({ errors: ['UNAUTHORIZED'] })
      .send();
  }

  return next();
});

app.use('/emails', emailRoutes);
app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);


app.listen(3000);

console.log('Running on port 3000');
