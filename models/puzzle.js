const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Puzzle = new Schema({
	rewarded_resources: {
	 type: String,
     required: true,
    },
	slicedImage: {
	 type: [String],
	 required: true,
	},
	image: {
	 type: String,
	 required: true,
	},
}, {
	 timestamps: true,
	 toObject: {
		virtuals: true
	},
});

module.exports = connection.model('Puzzle', Puzzle);