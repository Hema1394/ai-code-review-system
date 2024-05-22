const express = require('express');
const router = express.Router();
const developerController = require('../controllers/developerController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Middleware to check if the user is authenticated and is an admin
router.use(authMiddleware, adminMiddleware);

// Route to reset password of admin or student
router.post('/reset-password', developerController.resetPassword);

// Route to monitor status of users and admins
router.get('/status', developerController.monitorStatus);

// Route to contact developer via email
router.get('/contact', developerController.contactDeveloper);

module.exports = router;
