const express = require('express');
const router = express.Router();

// Redirect /planets to the frontend URL
router.get('/planets', (req, res) => {
  res.redirect('https://cosmo-voyage.onrender.com/planets');
});

module.exports = router;

