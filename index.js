const express = require('express');

const app = express();

const emailRoutes = require('./services/email');
const userRoutes = require('./services/user');
const companyRoutes = require('./services/company');

const expressValidator = require('express-validator');

app.use(express.json());
app.use(expressValidator());

// Middleware to emulate the user request object;v

app.use(function ( req, res,next) {
  if (!req.getValidationResult().isEmpty()) {
    return res
      .status(406)
      .json({
         errors: req.getValidationResult().mapped() 
        });
     }
})


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

app.listen(3000);

console.log('Running on port 3000');
