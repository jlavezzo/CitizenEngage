const Feedback = require('../models/feedbackModel');

// Handle user feedback submission
exports.submitFeedback = async (req, res) => {
  try {
    const { category, message } = req.body;
    const submittedBy = req.user.userId; // Get the authenticated user's ID from the JWT token

    // Create a new feedback instance
    const feedback = new Feedback({ category, message, submittedBy });

    // Save the feedback to the database
    await feedback.save();
    return res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    // Fetch all feedback from the database
    const feedbackList = await Feedback.find();

    return res.json(feedbackList);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get all feedback submitted by a specific user
exports.getUserFeedback = async (req, res) => {
  try {
    const userId = req.params.userId; // Get the user ID from the request parameters

    // Fetch all feedback submitted by the specified user from the database
    const feedbackList = await Feedback.find({ submittedBy: userId });

    return res.json(feedbackList);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};