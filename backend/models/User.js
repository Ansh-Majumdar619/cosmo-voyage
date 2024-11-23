const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Ensure email is always stored in lowercase
    trim: true,      // Remove extra spaces
  },
  password: {
    type: String,
    required: true,
    minlength: 6,    // Enforce a minimum password length
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  // If the password field is not modified, skip hashing
  if (!this.isModified('password')) return next();

  try {
    // Hash the password with a salt factor of 10
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error); // Pass any errors to the middleware error handler
  }
});

// Compare provided password with the hashed password in the database
userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);