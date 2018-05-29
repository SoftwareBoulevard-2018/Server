const express = require('express');

const router = express.Router();

const getTrainingAttempts = require('./getTrainingAttempts');

router.post('/', getTrainingAttempts);

module.exports = router;
