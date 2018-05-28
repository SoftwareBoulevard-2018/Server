const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Questions = new Schema({
	role: {
	 type: String,
  	required: true
    },
	question:{
		type: String,
		required: true
		},
	description:{
		type: String,
	  required: true
	   },
	answers:{
		type:[(String, Boolean)],
		required: true
	}

});

module.exports = connection.model('Questions', Questions);
