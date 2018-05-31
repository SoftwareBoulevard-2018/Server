const express = require('express');

const router = express.Router();

const createEstimation = require('./createEstimation');
const getEstimationByPMAndProject = require('./getEstimationByPMAndProject');
const getEstimationsByProjectManagerUsernameAndState = require('./getEstimationsByProjectManagerUsernameAndState');

router.post('/getEstimationsByProjectManagerUsernameAndState', getEstimationsByProjectManagerUsernameAndState);
router.post('/getEstimationByPMAndProject', getEstimationByPMAndProject);
router.post('/', createEstimation);

module.exports = router;
