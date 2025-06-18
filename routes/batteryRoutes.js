const express = require('express');
const router = express.Router();
const batteryController = require('../controllers/batteryController');

router.get('/getBattery', batteryController.getBatteries);
router.post('/addBattery', batteryController.addBattery);

module.exports = router;
