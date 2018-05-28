const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const invitations = new Schema({

  user:{
    type: String,
    unique: true,

  },
  company: {
    type: String,
    default: null,
    },

  state: {
    type: String,
    default: 'unattended',
  },


});

module.exports = connection.model('invitations', invitations);
