const GovernmentInitiative = require('../models/governmentInitiativeModel');

// Get all government initiatives
exports.getAllGovernmentInitiatives = async (req, res) => {
  try {
    const governmentInitiatives = await GovernmentInitiative.find();
    return res.render('government_initiatives', { governmentInitiatives });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Create a new government initiative
exports.createGovernmentInitiative = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const governmentInitiative = new GovernmentInitiative({ title, description, category });
    await governmentInitiative.save();
    return res.status(201).json({ message: 'Government initiative created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get a specific government initiative
exports.getGovernmentInitiativeById = async (req, res) => {
  try {
    const governmentInitiative = await GovernmentInitiative.findById(req.params.id);
    if (!governmentInitiative) {
      return res.status(404).json({ message: 'Government initiative not found' });
    }
    return res.json(governmentInitiative);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Update a government initiative
exports.updateGovernmentInitiative = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const updatedGovernmentInitiative = await GovernmentInitiative.findByIdAndUpdate(
      req.params.id,
      { title, description, category },
      { new: true }
    );
    if (!updatedGovernmentInitiative) {
      return res.status(404).json({ message: 'Government initiative not found' });
    }
    return res.json(updatedGovernmentInitiative);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Delete a government initiative
exports.deleteGovernmentInitiative = async (req, res) => {
  try {
    const deletedGovernmentInitiative = await GovernmentInitiative.findByIdAndDelete(req.params.id);
    if (!deletedGovernmentInitiative) {
      return res.status(404).json({ message: 'Government initiative not found' });
    }
    return res.json({ message: 'Government initiative deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};