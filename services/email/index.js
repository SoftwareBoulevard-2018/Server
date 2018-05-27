const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');
const sended = require('./sent');
const updateState = require('./updateState');

const router = express.Router();

router.get('/read/:id', read);
router.post('/send/', send);
router.get('/sent/:id',sent);
router.put('/updateState/:emailId',updateState);

module.exports = router;
