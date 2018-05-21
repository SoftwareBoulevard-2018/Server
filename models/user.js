const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ['Game Administrator', 'Developer', 'Analyst', 'Tester', 'Project Manager']
    },
    competencyLevel: {
        type: Number,
        default: function () {
            if(this.role === 'Developer' || this.role === 'Tester' || this.role === 'Analyst'){
                return 0;
            }
            return null;
        },
    },
    correctTrainingQuestions: {
        type: Number,
        default: function () {
            if(this.role === 'Developer' || this.role === 'Tester' || this.role === 'Analyst'){
                return 0;
            }
            return null;
        },
    },
    correctProjectQuestions: {
        type: Number,
        default: function () {
            if(this.role === 'Developer' || this.role === 'Tester' || this.role === 'Analyst'){
                return 0;
            }
            return null;
        },
    },
    companyId: {
        type: String,
        default: null,
    },
    resourcesSpent: {
        type: Number,
        default: function () {
            if(this.role === 'Developer' || this.role === 'Tester' || this.role === 'Analyst'){
                return 0;
            }
            return null;
        },
    },
}, {
    timestamps: true,
    toObject: {
        virtuals: true,
    },
});

module.exports = connection.model('User', User);
