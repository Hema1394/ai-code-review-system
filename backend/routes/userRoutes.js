const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to check if the user is authenticated
router.use(authMiddleware);

// Route to get user details
router.get('/details', userController.getUserDetails);

module.exports = router;
