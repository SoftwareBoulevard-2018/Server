const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');
const sended = require('./sended');
const updateState = require('./updateState');

const router = express.Router();

router.get('/read/:id', read);
router.post('/send/', send);
router.get('/:emailId', readOne);
router.get('/sended/:id',sended);
router.put('/updateState/',updateState);

module.exports = router;
