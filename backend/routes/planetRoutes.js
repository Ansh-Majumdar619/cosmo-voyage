const express = require('express');
const router = express.Router();

// Redirect /planets to the frontend URL
router.get('/planets', (req, res) => {
  res.redirect('http://localhost:5173/planets');
});

module.exports = router;

