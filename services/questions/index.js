const express = require('express');

const router = express.Router();

const createQuestion = require('./createQuestion');
const updateQuestion = require('./updateQuestion');
const getQuestionById = require('./getQuestionById');
const getQuestions = require('./getQuestions');

router.post('/createQuestion', createQuestion);
router.put('/updateQuestion/:id', updateQuestion);
router.get('/getQuestionById/:id', getQuestionById);
router.get('/', getQuestions);

module.exports = router;
