const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Questions = new Schema({
	role: {
	 type: String,
	 required: true,
    },
	description: {
	 type: String,
	 required: true,
	},
	answers: {[
		answer1:{
			description:{
				type: String,
				required: true
			}
			ifTrue:{
				type: Boolean,
				required: true
			}
		}

		answer2:{
			description:{
				type: String,
				required: true
			}
			ifTrue:{
				type: Boolean,
				required: true
			}
		}
		answer3:{
			description:{
				type: String,
				required: true
			}
			ifTrue:{
				type: Boolean,
				required: true
			}
		}

		answer4:{
			description:{
				type: String,
				required: true
			}
			ifTrue:{
				type: Boolean,
				required: true
			}
		}

	}]
		required: true
	}

});

module.exports = connection.model('Questions', Questions;
