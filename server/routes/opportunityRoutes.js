const express = require('express');
const router = express.Router();
const volunteerOpportunityController = require('../controllers/OppourtunityController');

router.post('/volunteer-opportunities', volunteerOpportunityController.createVolunteerOpportunity);
router.get('/volunteer-opportunities', volunteerOpportunityController.getVolunteerOpportunities);
router.get('/volunteer-opportunities/:id', volunteerOpportunityController.getVolunteerOpportunityById);
router.put('/volunteer-opportunities/:id', volunteerOpportunityController.updateVolunteerOpportunityById);
router.delete('/volunteer-opportunities/:id', volunteerOpportunityController.deleteVolunteerOpportunityById);

module.exports = router;
