const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// Middleware to check if the user is authenticated and is an admin
router.use(authMiddleware, adminMiddleware);

// Route to get all registered students
router.get('/students', adminController.getAllStudents);

// Route to block a student by name, roll number, or department
router.post('/block', adminController.blockStudent);

// Route to reset a student's password
router.post('/reset-password', adminController.resetStudentPassword);

module.exports = router;
