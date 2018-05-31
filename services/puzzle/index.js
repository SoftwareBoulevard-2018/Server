const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');
const getPuzzles = require('./getPuzzles');
const getPuzzleById = require('./getPuzzleById');

router.post('/createPuzzle', createPuzzle);
router.get('/getPuzzleById/:id', getPuzzleById);
router.get('/', getPuzzles);

module.exports = router;