const express = require('express');

const router = express.Router();

const getinvitations = require('./getinvitations');
const createinvitations = require('./createinvitations');
const getinvitationById = require('./getinvitationById');
const updateinvitations = require('./updateinvitations');


router.get('/', getinvitations);
router.post('/', createinvitations);
router.get('/', getinvitationById);
router.put('/:invitationsId', updateinvitations);

module.exports = router;
