const Form = require('../models/Form');
const multer = require('multer');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Handle form submission
exports.submitForm = async (req, res) => {
  try {
    // Extract data from form submission
    const {
      name,
      age,
      date,
      planet,
      numPersons,
      email,
      phone,
      price,
    } = req.body;

    // Validate required fields
    if (!name || !age || !date || !planet || !numPersons || !email || !phone || !price) {
      return res.status(400).json({
        message: 'All required fields must be filled out.',
      });
    }

    // Check if files were uploaded
    if (!req.files || !req.files.idVerification || !req.files.passportPhoto) {
      return res.status(400).json({
        message: 'ID Verification and Passport Photo are required.',
      });
    }

    // Retrieve uploaded file paths
    const idVerification = req.files.idVerification[0].path;
    const passportPhoto = req.files.passportPhoto[0].path;

    // Create a new form entry
    const newForm = new Form({
      name,
      age,
      date,
      planet,
      numPersons,
      email,
      phone,
      price,
      idVerification,
      passportPhoto,
    });

    // Save the form data to the database
    await newForm.save();

    // Respond with success
    res.status(201).json({
      message: 'Booking successfully saved!',
      formData: newForm,
    });
  } catch (error) {
    console.error('Error saving form data:', error);

    // Respond with error
    res.status(500).json({
      message: 'Error submitting the form. Please try again later.',
    });
  }
};

// Export the multer middleware for use in routes
exports.upload = upload.fields([
  { name: 'idVerification', maxCount: 1 },
  { name: 'passportPhoto', maxCount: 1 },
]);
