const express = require('express');
const router = express.Router();
const tireController = require('../controllers/tireController');

router.get('/getTires', tireController.getTires);
router.post('/addTire', tireController.addTire);

module.exports = router;
