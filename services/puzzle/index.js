const express = require('express');

const router = express.Router();

const createPuzzle = require('./createPuzzle');
const getPuzzles = require('./getPuzzles');


router.post('/createPuzzle', createPuzzle);

router.get('/', getPuzzles);
>>>>>>> 5b0e4684d2be70e4ac44eba2165418bb7cde2788

module.exports = router;