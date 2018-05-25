const express = require('express');

const router = express.Router();

const createBiddingProject = require('./createBiddingProject');
const createInstantProject = require('./createInstantProject');
const updateBiddingProject = require('./updateBiddingProject');

router.post('/createBiddingProject', createBiddingProject);
router.post('/createInstantProject', createInstantProject);
router.put('/updateBiddingProject/:name', updateBiddingProject);

module.exports = router;
