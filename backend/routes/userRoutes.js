const express = require('express');
const { signup, login, logout } = require('../controllers/userController');
const router = express.Router();

// User signup
router.post('/users/signup', signup);

// User login
router.post('/users/login', login);

// User logout
router.post('/users/logout', logout);

module.exports = router;
