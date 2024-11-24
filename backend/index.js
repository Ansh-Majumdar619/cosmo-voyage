const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/formRoutes');
const planetRoutes = require('./routes/planetRoutes');
const cookieParser = require('cookie-parser'); // For handling cookies (e.g., JWT tokens)

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser());  // For parsing cookies (needed for JWT tokens)
app.use(cors({
  origin: process.env.CLIENT_URL,  // Allow requests from your frontend URL
  credentials: true               // Allow cookies to be sent
}));


// Debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});


// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);  // User-related routes (signup, login)
app.use('/api/forms', formRoutes);  // Form submission routes
// app.use('/api', planetRoutes);
app.use('/', planetRoutes);
// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send({
    message: err.message || 'Something went wrong!',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
