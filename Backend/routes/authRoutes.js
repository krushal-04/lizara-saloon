const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin } = require('../controller/authController');

// Route for registering a new admin
router.post('/register', registerAdmin);

// Route for admin login
router.post('/login', loginAdmin);

module.exports = router;
