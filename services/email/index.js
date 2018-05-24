const express = require('express');

const read = require('./read');
const readOne = require('./readOne');
const send = require('./send');
const sended = require('./sended');
const listUsers = require('./listUsers');

const router = express.Router();

router.get('/', read);
router.post('/send', send);
router.get('/:emailId', readOne);
router.get('/sended',sended);
router.get('/listUsers',listUsers);

module.exports = router;
