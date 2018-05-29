const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const Assignment = new Schema({
    project: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    }
});

module.exports = connection.model('Assignment', Assignment);
