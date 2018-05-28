const express = require('express');

const router = express.Router();

const getTrainingAttempt = require('./getTrainingAttempt')
const createTrainingAttempt = require('./createTrainingAttempt');

router.get('/', getTrainingAttempt);
router.post('/', createTrainingAttempt);

module.exports = router;
