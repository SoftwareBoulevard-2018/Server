const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Puzzle = new Schema({
	rewarded_resources: {
	 type: Number,
     required: true
    },
	slicedImage: {
		type: [String],
		required: true
	},
	originalImage: {
		type: String,
		required: true
	},
});

module.exports = connection.model('Puzzle', Puzzle);