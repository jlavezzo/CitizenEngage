const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbackModel');

// Submit feedback route
router.post('/', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;

    // Create a new feedback instance
    const newFeedback = new Feedback({ name, email, feedback });

    // Save the feedback to the database
    await newFeedback.save();

    return res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;