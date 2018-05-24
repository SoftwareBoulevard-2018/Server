const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const BiddingProject = new Schema({
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
  required_K: {
    type: String,
    default: null,
  },
  rewarded_K: {
    type: Number,
    default: 0,
  },
  cost: {
    type: Number,
    default: 0,
  },
  time: {
    type: Number,
    default: 0,
  },
  required_tester_level: {
    type: Number,
    default: 0,
  },
  required_developer_level: {
    type: Number,
    default: 0,
  },
  required_analyst_level: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('BiddingProject', BiddingProject);
