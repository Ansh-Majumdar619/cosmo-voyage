const multer = require('multer');
const path = require('path');

// Set up storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Choose destination folder based on file type (passport photo or ID verification)
    if (file.fieldname === 'passportPhoto') {
      cb(null, './uploads/passportPhotos/');
    } else if (file.fieldname === 'idVerification') {
      cb(null, './uploads/idVerifications/');
    } else {
      cb(new Error('File type is not allowed'), false);
    }
  },
  filename: (req, file, cb) => {
    // Use original file name with timestamp to avoid conflicts
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

// Filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, or PDF files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
});

module.exports = upload;
