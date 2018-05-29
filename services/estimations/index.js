const express = require('express');

const router = express.Router();

const createEstimation = require('./createEstimation');
const getEstimationByPMAndProject = require('./getEstimationByPMAndProject');
const getEstimationsByProjectManagerUsernameAndState = require('./getEstimationsByProjectManagerUsernameAndState');

router.get('/getEstimationsByProjectManagerUsernameAndState', getEstimationsByProjectManagerUsernameAndState);
router.get('/getEstimationByPMAndProject', getEstimationByPMAndProject);
router.post('/', createEstimation);

module.exports = router;
