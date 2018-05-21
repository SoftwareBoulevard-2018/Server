const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const Company = new Schema({
    name: {
        type: String,
        required: true,
    },
    capacityK: {
        type: Number,
    },
    numberOfCorrectDevelopingAttempsByAnalyst: {
        type: Number,
    },
    numberOfCorrectDevelopingAttempsByDeveloper: {
        type: Number,
    },
    numberOfCorrectDevelopingAttempsByTester: {
        type: Number,
    },
    image: {
        type: String,
    },
    companyResource: {
        type: Number,
    },
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
});

module.exports = connection.model('Company', Company);