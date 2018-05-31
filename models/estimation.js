const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const Estimation = new Schema({
    attemptNumber: {
        type: Number,
        required: true,
    },
    projectManagerUsername: {
        type: String,
        default: null,
    },
    projectName: {
        type: String,
        default: null,
    },
    estimatedTime: {
        type: Number,
        default: null,
    },
    estimatedCost: {
        type: Number,
        default: null,
    },
    state: {
        type: String,
        default: null,
    },
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
});

module.exports = connection.model('Estimation', Estimation);
