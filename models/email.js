const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
// const readObjects = new Schema({
//   state: {
//     type: String,
//     enum: ['READ', 'UNREAD'],
//     default: 'UNREAD',
//     required: true,
//   },
//   user: {
//     type: String,
//     required: true,
//   },
// });

const Email = new Schema({
  sender: {
    type: String,
    required: true,
  },
  receivers: {
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
  acknowledgment:{
    type: [String],
    default:[],
    required:true,
  },
}, {
  timestamps: true,
  toObject: {
    virtuals: true,
  },
});

Email.statics.publicFields = () => ({
  createdAt: 1,
  sender: 1,
  subject: 1,
  receivers: 1,
  content: 1,
  acknowledgment: 1,
});

module.exports = connection.model('Email', Email);
