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
    default: 0,
  },
  numberOfCorrectDevelopingAttempsByAnalyst: {
    type: Number,
    default: 0,
  },
  numberOfCorrectDevelopingAttempsByDeveloper: {
    type: Number,
    default: 0,
  },
  numberOfCorrectDevelopingAttempsByTester: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: null,
  },
  companyResource: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('Company', Company);
