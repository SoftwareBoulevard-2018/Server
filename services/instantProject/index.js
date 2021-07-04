const express = require('express');

const router = express.Router();

const createInstantProject = require('./createInstantProject');
const updateInstantProject = require('./updateInstantProject');
const getInstantProject = require('./getInstantProject');
const getInstantProjectById = require('./getInstantProjectById');
const getInstantProjectByName = require('./getInstantProjectByName');

router.post('/createInstantProject', createInstantProject);
router.put('/updateInstantProject/:id', updateInstantProject);
router.get('/getInstantProject', getInstantProject);
router.get('/:projectId', getInstantProjectById);
router.get('/getInstantProjectByName/:name', getInstantProjectByName);

module.exports = router;

