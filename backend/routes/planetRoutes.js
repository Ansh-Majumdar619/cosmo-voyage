// routes/planetRoutes.js
const express = require('express');
const router = express.Router();
const { getPlanets } = require('../controllers/planetController');

// Define route to get planets data
router.get('/', getPlanets);

module.exports = router;

      
     
