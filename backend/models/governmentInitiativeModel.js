const mongoose = require('mongoose');

const GovernmentInitiative = mongoose.model('GovernmentInitiative', governmentInitiativeSchema);
// const GovernmentInitiative = require('../models/governmentInitiativeModel');

// Get all government initiatives
exports.getAllGovernmentInitiatives = async (req, res) => {
  try {
    // Fetch all government initiatives from the database
    const governmentInitiatives = await GovernmentInitiative.find();

    return res.json(governmentInitiatives);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Create a new government initiative
exports.createGovernmentInitiative = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    // Create a new government initiative instance
    const governmentInitiative = new GovernmentInitiative({ title, description, category });

    // Save the government initiative to the database
    await governmentInitiative.save();

    return res.status(201).json({ message: 'Government initiative created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Get a specific government initiative
exports.getGovernmentInitiativeById = async (req, res) => {
  try {
    const initiativeId = req.params.id;

    // Fetch the government initiative from the database using the provided ID
    const governmentInitiative = await GovernmentInitiative.findById(initiativeId);

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
    const initiativeId = req.params.id;
    const { title, description, category } = req.body;

    // Find the government initiative by ID and update its fields
    const updatedGovernmentInitiative = await GovernmentInitiative.findByIdAndUpdate(
      initiativeId,
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
    const initiativeId = req.params.id;

    // Find the government initiative by ID and delete it
    const deletedGovernmentInitiative = await GovernmentInitiative.findByIdAndDelete(initiativeId);

    if (!deletedGovernmentInitiative) {
      return res.status(404).json({ message: 'Government initiative not found' });
    }

    return res.json({ message: 'Government initiative deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};


