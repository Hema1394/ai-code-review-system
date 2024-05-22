const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

// POST route for uploading a single file
router.post('/upload', upload.single('file'), (req, res) => {
  // Handle file upload here
  res.send('File uploaded successfully');
});

module.exports = router;

