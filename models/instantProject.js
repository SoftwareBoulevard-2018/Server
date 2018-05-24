const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const InstantProject = new Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfDevelopingQuestionsPerAnalyst: {
    type: Number,
    default: 0,
  },
  numberOfDevelopingQuestionsPerDeveloper: {
    type: Number,
    default: 0,
  },
  numberOfDevelopingQuestionsPerTester: {
    type: Number,
    default: 0,
  },
  rewarded_K: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('InstantProject', InstantProject);
