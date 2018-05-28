const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

const TrainingAttempt = new Schema({
    number:{
        type: Number,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: [String],
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
});

module.exports = connection.model('TrainingAttempt', TrainingAttempt);