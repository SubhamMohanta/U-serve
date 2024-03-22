const mongoose = require('mongoose');

const volunteerHoursSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  volunteerOpportunity: { type: mongoose.Schema.Types.ObjectId, ref: 'VolunteerOpportunity', required: true },
  hours: { type: Number, required: true },
  date: { type: Date, required: true },
}, { timestamps: true });

const VolunteerHours = mongoose.model('VolunteerHours', volunteerHoursSchema);

module.exports = VolunteerHours;
