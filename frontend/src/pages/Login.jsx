import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api'; // Axios instance to handle API requests
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error message

    try {
      // Sending login request to the backend
      const response = await API.post('/users/login', { email, password });

      // Extract token and user data from the response
      const { token, user } = response.data;

      // Save the token in localStorage for authentication persistence
      localStorage.setItem('authToken', token);

      // Pass user information to parent component or use it as needed
      onLogin(user);

      // Navigate to the second home/dashboard
      navigate('/secondhome');
    } catch (err) {
      // Display error message from the server or default error message
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        {/* Display error message if present */}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
            <button
              type="button"
              className="show-password-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="login-footer">
          Don’t have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
