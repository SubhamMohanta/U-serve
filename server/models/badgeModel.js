const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
}, { timestamps: true });

const Badge = mongoose.model('Badge', badgeSchema);

module.exports = Badge;
