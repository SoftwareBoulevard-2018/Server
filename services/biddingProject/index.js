const express = require('express');

const router = express.Router();

const createBiddingProject = require('./createBiddingProject');
const updateBiddingProject = require('./updateBiddingProject');

router.post('/createBiddingProject', createBiddingProject);
router.put('/updateBiddingProject/:name', updateBiddingProject);

module.exports = router;
