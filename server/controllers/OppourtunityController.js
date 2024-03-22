const VolunteerOpportunity = require('../models/volunteerOpportunityModel');

// Controller function to create a new volunteer opportunity
const createVolunteerOpportunity = async (req, res) => {
  try {
    const { title, description, organization, location, startDate, endDate, requirements } = req.body;
    const newVolunteerOpportunity = new VolunteerOpportunity({ title, description, organization, location, startDate, endDate, requirements });
    const savedVolunteerOpportunity = await newVolunteerOpportunity.save();
    res.status(201).json(savedVolunteerOpportunity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to get all volunteer opportunities
const getVolunteerOpportunities = async (req, res) => {
  try {
    const volunteerOpportunities = await VolunteerOpportunity.find();
    res.status(200).json(volunteerOpportunities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single volunteer opportunity by ID
const getVolunteerOpportunityById = async (req, res) => {
  try {
    const volunteerOpportunity = await VolunteerOpportunity.findById(req.params.id);
    if (!volunteerOpportunity) {
      return res.status(404).json({ message: 'Volunteer opportunity not found' });
    }
    res.status(200).json(volunteerOpportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a volunteer opportunity by ID
const updateVolunteerOpportunityById = async (req, res) => {
  try {
    const { title, description, organization, location, startDate, endDate, requirements } = req.body;
    const updatedVolunteerOpportunity = await VolunteerOpportunity.findByIdAndUpdate(req.params.id, 
      { title, description, organization, location, startDate, endDate, requirements }, 
      { new: true }
    );
    if (!updatedVolunteerOpportunity) {
      return res.status(404).json({ message: 'Volunteer opportunity not found' });
    }
    res.status(200).json(updatedVolunteerOpportunity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a volunteer opportunity by ID
const deleteVolunteerOpportunityById = async (req, res) => {
  try {
    const deletedVolunteerOpportunity = await VolunteerOpportunity.findByIdAndDelete(req.params.id);
    if (!deletedVolunteerOpportunity) {
      return res.status(404).json({ message: 'Volunteer opportunity not found' });
    }
    res.status(200).json({ message: 'Volunteer opportunity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createVolunteerOpportunity, getVolunteerOpportunities, getVolunteerOpportunityById, updateVolunteerOpportunityById, deleteVolunteerOpportunityById };
