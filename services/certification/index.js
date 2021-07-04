const express = require('express');
const get = require('./getCertification');
const create = require('./createCertification');
const update = require('./updateCertification');
const getAll = require('./getCertifications');

const router = express.Router();

router.get('/getCertification/', get);
router.put('/updateCertification/:id',update);
router.post('/createCertification/',create);
router.get('/getCertifications/', getAll);

module.exports = router;