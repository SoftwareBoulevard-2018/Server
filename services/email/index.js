const express = require('express');
const router = express.Router();

const read = require('./read');
const send = require('./send');

router.get('/', read);
router.post('/send', send);

module.exports = router;
