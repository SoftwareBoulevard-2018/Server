const express = require('express');

const router = express.Router();

const createAssignment = require('./createAssignment');
const updateAssignment = require('./updateAssignment');
const getAssignment = require('./getAssignment');
const getAssignmentProjectById = require('./getAssignmentProjectById');
const deleteAssignment = require('./deleteAssignment');


router.post('/createAssignment', createAssignment);
router.put('/updateAssignment/:id', updateAssignment);
router.get('/getAssignment', getAssignment);
router.put('/deleteAssignment/:id', deleteAssignment);
router.get('/:projectId', getAssignmentProjectById);

module.exports = router; 
