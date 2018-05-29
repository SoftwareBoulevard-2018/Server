const express = require('express');

const router = express.Router();

const createBiddingProject = require('./createBiddingProject');
const updateBiddingProject = require('./updateBiddingProject');
const getBiddingProjectById = require('./getBiddingProjectById');
const getBiddingProject = require('./getBiddingProject');

router.post('/createBiddingProject', createBiddingProject);
router.put('/updateBiddingProject/:id', updateBiddingProject);
router.get('/getBiddingProject', getBiddingProject);
router.get('/:projectId', getBiddingProjectById);


module.exports = router; 
