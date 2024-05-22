const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');

const router = express.Router();

// Fetch all students
router.get('/students', async (req, res) => {
  const students = await User.find({ role: 'student' });
  res.send(students);
});

// Block a student
router.post('/block/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Student not found.');

  user.isBlocked = true;
  await user.save();

  res.send('Student blocked.');
});

// Reset student password
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).send('Student not found.');

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  await user.save();

  res.send('Password reset successfully.');
});

module.exports = router;
