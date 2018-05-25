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
  },
  numberOfDevelopingQuestionsPerDeveloper: {
    type: Number,
  },
  numberOfDevelopingQuestionsPerTester: {
    type: Number,
  },
  rewarded_K: {
    type: Number,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

InstantProject.statics.publicFields = () => ({
  numberOfDevelopingQuestionsPerAnalyst: 1,
  numberOfDevelopingQuestionsPerDeveloper: 1,
  numberOfDevelopingQuestionsPerTester: 1,
  rewarded_K: 1,
});

module.exports = connection.model('InstantProject', InstantProject);
