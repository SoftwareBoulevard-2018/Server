const express = require('express');

const router = express.Router();

const getinvitations = require('./getinvitations');
const createinvitations = require('./createinvitations');
const getinvitationById = require('./getinvitationById');
const updateinvitations = require('./updateinvitations');
const getinvitationsByUserAndState = require('./getinvitationsByUserAndState');
const getinvitationsByUserAndCompany = require('./getinvitationsByUserAndCompany');

router.get('/', getinvitations);
router.post('/', createinvitations);
router.post('/getCurrentInvitationID', getinvitationById);
router.put('/:invitationsId', updateinvitations);
router.post('/getCurrentInvitation', getinvitationsByUserAndState);
router.post('/getCurrentInvitationCom', getinvitationsByUserAndCompany);


module.exports = router;





