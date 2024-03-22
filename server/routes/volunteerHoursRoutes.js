const express = require('express');
const router = express.Router();
const volunteerHoursController = require('../controllers/VolunteerHoursController');

router.post('/volunteer-hours', volunteerHoursController.createVolunteerHours);
router.get('/volunteer-hours', volunteerHoursController.getVolunteerHours);
router.get('/volunteer-hours/:id', volunteerHoursController.getVolunteerHoursById);
router.put('/volunteer-hours/:id', volunteerHoursController.updateVolunteerHoursById);
router.delete('/volunteer-hours/:id', volunteerHoursController.deleteVolunteerHoursById);

module.exports = router;
