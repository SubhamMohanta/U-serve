const Badge = require('../models/badgeModel');

// Controller function to create a new badge
const createBadge = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newBadge = new Badge({ name, description, image });
    const savedBadge = await newBadge.save();
    res.status(201).json(savedBadge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all badges
const getBadges = async (req, res) => {
  try {
    const badges = await Badge.find();
    res.status(200).json(badges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single badge by ID
const getBadgeById = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    if (!badge) {
      return res.status(404).json({ message: 'Badge not found' });
    }
    res.status(200).json(badge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a badge by ID
const updateBadgeById = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const updatedBadge = await Badge.findByIdAndUpdate(req.params.id, 
      { name, description, image }, 
      { new: true }
    );
    if (!updatedBadge) {
      return res.status(404).json({ message: 'Badge not found' });
    }
    res.status(200).json(updatedBadge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a badge by ID
const deleteBadgeById = async (req, res) => {
  try {
    const deletedBadge = await Badge.findByIdAndDelete(req.params.id);
    if (!deletedBadge) {
      return res.status(404).json({ message: 'Badge not found' });
    }
    res.status(200).json({ message: 'Badge deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBadge, getBadges, getBadgeById, updateBadgeById, deleteBadgeById };
