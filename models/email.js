const mongoose = require('mongoose');

const { Schema } = mongoose;

const Email = new Schema({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Email', Email);
