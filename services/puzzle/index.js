const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');


router.post('/createPuzzle', createPuzzle);
router.post('/getPuzzle', getPuzzle);

module.exports = router;