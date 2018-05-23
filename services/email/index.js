const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');
const sended = require('./sended');

const router = express.Router();

router.get('/', read);
router.post('/send', send);
router.get('/:emailId', readOne);
router.get('/sended',sended)

module.exports = router;
