const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');
const getPuzzles = require('./getPuzzles');

router.post('/createPuzzle', createPuzzle);

router.get('/', getPuzzles);

module.exports = router;