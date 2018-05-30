const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;
const Certification = new Schema({
	role:
	{
		type: String,
		required: true
	},
	level:
	{
		type: Number,
		required: true
	},
	questions:
	{
		type: [String],
		required: true
	}
});
module.exports = connection.model('Certification', Certification);