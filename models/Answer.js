const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Answer = new Schema({
	description: {
	 type: String,
     required: true
    },
	veracity: {
		type: Boolean,
		required: true
	}
});

module.exports = connection.model('Answer', Answer);