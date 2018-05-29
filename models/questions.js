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

const Questions = new Schema({
	role: {
	 type: String,
  	required: true
    },
	description:{
		type: String,
	  required: true
	},
	answers:{
		type:[Answer],
		required: true
	}

});

module.exports = connection.model('Questions', Questions);
