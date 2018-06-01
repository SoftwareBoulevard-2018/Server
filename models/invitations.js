const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const invitations = new Schema({

  user:{
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    },

  state: {
    type: String,
    required: true,
    default: 'pending',
  },


});

module.exports = connection.model('invitations', invitations);
