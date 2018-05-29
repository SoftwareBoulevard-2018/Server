const express = require('express');

const router = express.Router();

const getprojects = require('./getprojects');
const getprojectsById = require('./getprojectsById');


router.get('/', getprojects);
router.get('/', getprojectsById);

module.exports = router;
