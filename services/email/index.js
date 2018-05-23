const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');

const router = express.Router();

router.get('/', read);
router.post('/send', send);
router.get('/:emailId', readOne);

module.exports = router;
