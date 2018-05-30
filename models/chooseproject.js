const mongoose = require('mongoose');

const connection = require('./connection');

const { Schema } = mongoose;

// Check model to check whether or no this kind of schema works.
const chooseproject = new Schema({

  name:{
    type: String,
  },

  required_K: {
    type: Number,

    },

  rewarded_K: {
    type: Number,

  },
  cost:{
    type: Number,
  },

  time:{
    type: Number,

  },

});

module.exports = connection.model('chooseproject', chooseproject);
