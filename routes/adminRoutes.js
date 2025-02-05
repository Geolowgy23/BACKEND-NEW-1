// routes/adminRoutes.js
const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/orders', adminController.getOrders);

module.exports = router;
