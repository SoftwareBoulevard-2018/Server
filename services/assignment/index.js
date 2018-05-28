const express = require('express');

const router = express.Router();

const createAssignment = require('./createAssignment');
const updateAssignment = require('./updateAssignment');
const getAssignment = require('./getAssignment');
const getAssignmentProjectById = require('./getAssignmentProjectById');

router.post('/createAssignment', createAssignment);
router.put('/updateAssignment/:id', updateAssignment);
router.get('/getAssignment', getAssignment);
router.get('/:projectId', getAssignmentProjectById);

module.exports = router; 
