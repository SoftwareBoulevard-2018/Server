const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const readObjects = new Schema({
  state: {
    type: String,
    enum: ['READ', 'UNREAD'],
    default: 'UNREAD',
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const Email = new Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: [String],
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  acknowledgement: [readObjects],
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

module.exports = connection.model('Email', Email);
