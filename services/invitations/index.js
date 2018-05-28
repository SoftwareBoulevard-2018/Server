const express = require('express');

const router = express.Router();

const getinvitations = require('./getinvitations');
const createinvitations = require('./createinvitations');


router.get('/', getinvitations);
router.post('/', createinvitations);

module.exports = router;
