import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // For backend API requests

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Send a request to the backend logout endpoint
        await axios.post('https://cosmo-voyage-backend.onrender.com/api/users/logout', {}, {
          withCredentials: true, // Include cookies if you're using them for auth
        });

        // Call the logout handler passed from parent component
        onLogout();

        // Redirect to the home page
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error.response?.data?.message || error.message);
      }
    };

    handleLogout();
  }, [onLogout, navigate]);

  return (
    <div className="logout-container">
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
