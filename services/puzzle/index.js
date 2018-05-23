const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');

router.post('/', createPuzzle);

module.exports = router;