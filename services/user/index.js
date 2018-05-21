const express = require('express');

const router = express.Router();

const getUsers = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const getUserById = require('./getUserById');

router.get('/', getUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.get('/:userId', getUserById);

module.exports = router;
