const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');
const getPuzzles = require('./getPuzzles');
const getPuzzleById = require('./getPuzzleById');
const updatePuzzle = require('./updatePuzzle');

router.post('/createPuzzle', createPuzzle);
router.get('/getPuzzleById/:id', getPuzzleById);
router.get('/', getPuzzles);
router.put('/updatePuzzle/:id', updatePuzzle);

module.exports = router;