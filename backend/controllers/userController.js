const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Replaced bcrypt with bcryptjs

// User Sign Up
exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user (password will be hashed automatically due to pre-save hook)
    const newUser = new User({ email, password }); // Do NOT hash the password here
    await newUser.save(); // The password will be hashed automatically

    console.log('User created successfully:', { email: newUser.email, id: newUser._id });

    // Create JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// User Login in Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Login Attempt:', { email });

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    console.log('User Found:', { email: user.email });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password); // Updated to bcryptjs's compare method
    console.log('Password Match:', isMatch);

    if (!isMatch) {
      console.log('Invalid credentials');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('Login successful:', { id: user._id, email: user.email });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: { id: user._id, email: user.email },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// User Logout
exports.logout = (req, res) => {
  try {
    res.clearCookie('token'); // Clear the cookie where JWT is stored
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

      
    
