const express = require('express');

const router = express.Router();

const createQuestion = require('./createQuestion');

router.post('/createQuestion', createQuestion);

module.exports = router;
