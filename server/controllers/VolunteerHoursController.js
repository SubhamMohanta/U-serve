const VolunteerHours = require('../models/volunteerHoursModel');

// Controller function to create volunteer hours entry
const createVolunteerHours = async (req, res) => {
  try {
    const { user, volunteerOpportunity, hours, date } = req.body;
    const newVolunteerHours = new VolunteerHours({ user, volunteerOpportunity, hours, date });
    const savedVolunteerHours = await newVolunteerHours.save();
    res.status(201).json(savedVolunteerHours);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all volunteer hours entries
const getVolunteerHours = async (req, res) => {
  try {
    const volunteerHours = await VolunteerHours.find();
    res.status(200).json(volunteerHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get volunteer hours entry by ID
const getVolunteerHoursById = async (req, res) => {
  try {
    const volunteerHours = await VolunteerHours.findById(req.params.id);
    if (!volunteerHours) {
      return res.status(404).json({ message: 'Volunteer hours entry not found' });
    }
    res.status(200).json(volunteerHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update volunteer hours entry by ID
const updateVolunteerHoursById = async (req, res) => {
  try {
    const { user, volunteerOpportunity, hours, date } = req.body;
    const updatedVolunteerHours = await VolunteerHours.findByIdAndUpdate(req.params.id, 
      { user, volunteerOpportunity, hours, date }, 
      { new: true }
    );
    if (!updatedVolunteerHours) {
      return res.status(404).json({ message: 'Volunteer hours entry not found' });
    }
    res.status(200).json(updatedVolunteerHours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete volunteer hours entry by ID
const deleteVolunteerHoursById = async (req, res) => {
  try {
    const deletedVolunteerHours = await VolunteerHours.findByIdAndDelete(req.params.id);
    if (!deletedVolunteerHours) {
      return res.status(404).json({ message: 'Volunteer hours entry not found' });
    }
    res.status(200).json({ message: 'Volunteer hours entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createVolunteerHours, getVolunteerHours, getVolunteerHoursById, updateVolunteerHoursById, deleteVolunteerHoursById };
