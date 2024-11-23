const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// POST route for form submission
router.post(
  '/submit',
  formController.upload, // Multer middleware for handling file uploads
  formController.submitForm
);

module.exports = router;
