const express = require('express');
const router = express.Router();
const badgeController = require('../controllers/BadgeController');

router.post('/badges', badgeController.createBadge);
router.get('/badges', badgeController.getBadges);
router.get('/badges/:id', badgeController.getBadgeById);
router.put('/badges/:id', badgeController.updateBadgeById);
router.delete('/badges/:id', badgeController.deleteBadgeById);

module.exports = router;
