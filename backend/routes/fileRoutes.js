const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');

router.post('/upload', upload.single('file'), (req, res) => {
  // Handle file upload here
  res.send('File uploaded successfully');
});

module.exports = router;
