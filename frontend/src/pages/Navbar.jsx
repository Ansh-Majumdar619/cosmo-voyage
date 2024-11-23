import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, username }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Determine the current page
  const isFirstHome = location.pathname === '/';
  const isSignUpPage = location.pathname === '/signup';
  const isLoginPage = location.pathname === '/login';

  // Toggle menu function for hamburger
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger icon for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Centered Navbar links */}
        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>

          {!isLoggedIn && isFirstHome && (
            <>
              <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
            </>
          )}

          {isSignUpPage && <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>}
          {isLoginPage && <Link to="/signup" className="nav-link" onClick={() => setMenuOpen(false)}>Sign Up</Link>}

          {isLoggedIn && (
            <>
              <Link to="/planets" className="nav-link" onClick={() => setMenuOpen(false)}>Planets</Link>
              <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/logout" className="nav-link" onClick={() => setMenuOpen(false)}>Logout</Link>
              {/* Display the username on the right side of the navbar */}
              {/* <span className="nav-username">{username}</span> */}
              {/* <span className="nav-username">{username || 'User'}</span>   */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
