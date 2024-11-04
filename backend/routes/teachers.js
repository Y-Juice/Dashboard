const express = require('express');
const Teacher = require('../models/Teacher');

const router = express.Router();

// GET all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    console.error("Error fetching teachers:", err);  // Log error details
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
