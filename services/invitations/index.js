const express = require('express');

const router = express.Router();

const getinvitations = require('./getinvitations');
const createinvitations = require('./createinvitations');
const getinvitationById = require('./getinvitationById');
const updateinvitations = require('./updateinvitations');
const getinvitationsByUserAndState = require('./getinvitationsByUserAndState');


router.get('/', getinvitations);
router.post('/', createinvitations);
router.post('/getCurrentInvitationID', getinvitationById);
router.put('/', updateinvitations);
router.post('/getCurrentInvitation', getinvitationsByUserAndState);


module.exports = router;
