const express = require('express');

const router = express.Router();

const createRecord = require('./createRecord');
const getRecords = require('./getRecords');
const getRecordsByCompany = require('./getRecordsByCompany');
const getRecordsByProject = require('./getRecordsByProject');
const getRecordsByFinishDateAndCompany = require('./getRecordsByFinishDateAndCompany');


router.post('/', createRecord);
router.get('/', getRecords);
router.get('/:company', getRecordsByCompany);
router.post('/getCurrentProject', getRecordsByFinishDateAndCompany);
router.get('/getRecordsByProject/:project', getRecordsByProject);

module.exports = router;