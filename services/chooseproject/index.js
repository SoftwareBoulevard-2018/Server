const express = require('express');

const router = express.Router();

const getprojects = require('./getprojects');
const getprojectsById = require('./getprojectsById');


router.get('/', getprojects);
router.post('/getprojectsById', getprojectsById);

module.exports = router;
