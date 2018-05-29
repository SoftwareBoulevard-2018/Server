const express = require('express');

const router = express.Router();

const getDevelopingAttempts = require('./getDevelopingAttempts');

router.post('/', getDevelopingAttempts);

module.exports = router;
