const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const TrainingAttempt = new Schema({
  number: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    default: 0,
  },
  question: {
    type: String,
    default: 0,
  },
  answer: {
    type: [String],
    default: 0,
  },
  user: {
    type: String,
    default: 0,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('training_attempt', TrainingAttempt);
