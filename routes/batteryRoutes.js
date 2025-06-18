const express = require('express');
const router = express.Router();
const batteryController = require('../controllers/batteryController');

// router.get('/', batteryController.getBatteries);
router.post('/', batteryController.addBattery);

module.exports = router;
