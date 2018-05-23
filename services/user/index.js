const express = require('express');

const router = express.Router();

const getUsers = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const getUserById = require('./getUserById');
const getUserByUsername = require('./getUserByUsername');

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.get('/:userId', getUserById);
router.get('/username/:username', getUserByUsername);

module.exports = router;
