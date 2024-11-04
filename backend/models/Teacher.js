const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  subjects: [String],
  yearsExperience: Number,
  numClasses: Number
});

module.exports = mongoose.model('Teacher', teacherSchema);
