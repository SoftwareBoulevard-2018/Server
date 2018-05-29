const express = require('express');

const router = express.Router();

const getTrainingAttempts = require('./getTrainingAttempts');
const createTrainingAttempts = require('./createTrainingAttempts');

router.post('/', getTrainingAttempts);
router.post('/create', createTrainingAttempts);

module.exports = router;
