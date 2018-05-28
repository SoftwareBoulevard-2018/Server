const express = require('express');

const router = express.Router();

const getTrainingAttempts = require('./getTrainingAttempts');

router.get('/', getTrainingAttempts);

module.exports = router;
