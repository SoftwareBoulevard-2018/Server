const express = require('express');

const router = express.Router();

const createBiddingProject = require('./createBiddingProject');
const updateBiddingProject = require('./updateBiddingProject');
const getBiddingProjectById = require('./getBiddingProjectById');

router.post('/createBiddingProject', createBiddingProject);
router.put('/updateBiddingProject/:name', updateBiddingProject);
router.get('/:companyId', getBiddingProjectById);

module.exports = router;
