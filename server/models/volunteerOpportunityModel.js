const mongoose = require('mongoose');

const volunteerOpportunitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    organization: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    requirements: [{ type: String }],
}, { timestamps: true });

const VolunteerOpportunity = mongoose.model('VolunteerOpportunity', volunteerOpportunitySchema);

module.exports = VolunteerOpportunity;
