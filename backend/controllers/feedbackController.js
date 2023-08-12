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

// Get all feedback
const getAllFeedback = async (req, res) => {
  try {
    // Fetch all feedback from the database
    const feedbackList = await Feedback.find();

    return res.json(feedbackList);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get all feedback submitted by a specific user
const getUserFeedback = async (req, res) => {
  try {
    const userId = req.params.userId; // Get the user ID from the request parameters

    // Fetch all feedback submitted by the specified user from the database
    const feedbackList = await Feedback.find({ submittedBy: userId });

    return res.json(feedbackList);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback,
  getUserFeedback
};