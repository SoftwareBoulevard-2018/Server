const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const invitations = new Schema({
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    unique: true,
    required: true,
  },
  companyId: {
    type: String,
    default: null,
    },

  state: {
    type: String,

  },


});

module.exports = connection.model('invitations', invitations);
