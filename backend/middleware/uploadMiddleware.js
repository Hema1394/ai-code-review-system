const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify the directory where files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Rename file with current timestamp to avoid conflicts
  }
})

// Create multer instance with specified storage options
const upload = multer({ storage: storage });

module.exports = upload;
