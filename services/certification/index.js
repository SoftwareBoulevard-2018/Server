const express = require('express');
const get = require('./getCertification');
const create = require('./createCertification');
const update = require('./updateCertification');

const router = express.Router();

router.get('/getCertification/', get);
router.put('/updateCertification/:id',update);
router.post('/createCertification/',create);

module.exports = router;