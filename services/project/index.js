const express = require('express');

const router = express.Router();

const createBiddingProject = require('./createBiddingProject');
const createInstantProject = require('./createInstantProject');

router.post('/', createBiddingProject);
router.post('/', createInstantProject);

module.exports = router;
