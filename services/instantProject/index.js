const express = require('express');

const router = express.Router();

const createInstantProject = require('./createInstantProject');

router.post('/createInstantProject', createInstantProject);

module.exports = router;
