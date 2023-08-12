const Feedback = require('../models/feedbackModel');

// Handle user feedback submission
const submitFeedback = async (req, res) => {
  try {
    const { category, message } = req.body;
    // Create a new feedback instance
    const feedback = new Feedback({ category, message });
    // Save the feedback to the database
    await feedback.save();
    return res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  submitFeedback,
};