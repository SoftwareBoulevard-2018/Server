const express = require('express');

const router = express.Router();

const getDevelopingAttempts = require('./getDevelopingAttempts');
const createDevelopingAttempts = require('./createDevelopingAttempts');

router.post('/', getDevelopingAttempts);
router.post('/create', createDevelopingAttempts);

module.exports = router;
