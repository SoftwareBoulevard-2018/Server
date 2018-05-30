const cors = require('cors');
const express = require('express');
const expressValidator = require('express-validator');

const emailRoutes = require('./services/email');
const userRoutes = require('./services/user');
const companyRoutes = require('./services/company');
const puzzleRoutes = require('./services/puzzle');
const loginRoutes = require('./services/login');
const logoutRoutes = require('./services/logout');
const reportsRoutes = require('./services/reports');
const recordsRoutes = require('./services/record');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const BiddingProjectRoutes = require('./services/biddingProject');
const InstantProjectRoutes = require('./services/instantProject');
const questionRoutes = require('./services/questions');
const assignmentRoutes = require('./services/assignment');
const invitationsRoutes = require('./services/invitations');
const chooseprojectRoutes = require('./services/chooseproject');
const estimationRoutes = require('./services/estimations');
const trainingAttemptRoutes = require('./services/trainingAttempt');
const developingAttemptRoutes = require('./services/developingAttempt');
const certificationRoutes = require('./services/certification');
const app = express();

const connection = require('./models/connection');


app.use(express.json());
app.use(cors());
app.use(expressValidator());
//session and validations aren't yet fully implemented
/*app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: connection }),
}));*/

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

/* // Verifies if user is logged in for /users services
app.use('/users', (req, res, next) => {
  if (!req.session.user) {
    return res.status(401)
      .json({ errors: ['UNAUTHORIZED'] })
      .send();
  }

  return next();
}); */

app.use('/emails', emailRoutes);
app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/puzzles', puzzleRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);
app.use('/biddingProjects', BiddingProjectRoutes);
app.use('/instantProjects', InstantProjectRoutes);
app.use('/reports', reportsRoutes);
app.use('/records', recordsRoutes);
app.use('/questions', questionRoutes);
app.use('/assignments', assignmentRoutes);
app.use('/invitations', invitationsRoutes);
app.use('/chooseproject', chooseprojectRoutes);
app.use('/trainingAttempts', trainingAttemptRoutes);
app.use('/developingAttempts', developingAttemptRoutes);
app.use('/puzzleImages', express.static(__dirname + '/puzzleImages'));
app.use('/static/company_img', express.static(__dirname + '/static/company_img'));
app.use('/estimations', estimationRoutes);
app.use('/certification', certificationRoutes);

app.listen(3000, () => {
  console.log('Running on port 3000');
});
