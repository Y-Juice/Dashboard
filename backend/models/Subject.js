const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  semester: {
    type: Number,
    required: true
  },
  credits: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Subject', subjectSchema);
