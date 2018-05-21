const express = require('express');

const router = express.Router();

const read = require('./read');
const readOne = require('./readOne');
// const send = require('./send');

router.get('/', read);
// router.post('/send', send);
router.get('/:emailId', readOne);

module.exports = router;
