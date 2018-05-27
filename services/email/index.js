const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');
const sent = require('./sent');

const router = express.Router();

router.get('/read', read);
router.get('/sent',sent);
router.post('/send', send);
router.get('/:emailId', readOne);


module.exports = router;
