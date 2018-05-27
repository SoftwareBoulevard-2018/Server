const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const Record = new Schema({

    company: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    finishDate: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
});

module.exports = connection.model('Record', Record);
