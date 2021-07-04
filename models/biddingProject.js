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
  },
  numberOfDevelopingQuestionsPerDeveloper: {
    type: Number,
  },
  numberOfDevelopingQuestionsPerTester: {
    type: Number,
  },
  required_K: {
    type: Number, 
  },
  rewarded_K: {
    type: Number,
  },
  cost: {
    type: Number,
  },
  time: {
    type: Number,
  },
  required_tester_level: {
    type: Number,
  },
  required_developer_level: {
    type: Number,
  },
  required_analyst_level: {
    type: Number,
  },
},{collection: 'projects' });

BiddingProject.statics.publicFields = () => ({
  numberOfDevelopingQuestionsPerAnalyst: 1,
  numberOfDevelopingQuestionsPerDeveloper: 1,
  numberOfDevelopingQuestionsPerTester: 1,
  required_K: 1,
  rewarded_K: 1,
  cost: 1,
  time: 1,
  required_tester_level: 1,
  required_developer_level: 1,
  required_analyst_level: 1,

});

module.exports = connection.model('BiddingProject', BiddingProject);
