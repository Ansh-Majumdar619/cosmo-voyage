import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 col-sm-12 mb-3">
            <h5 className="footer-heading">Cosmo Voyage</h5>
            <p className="footer-text">
              At Cosmo Voyage, we redefine exploration by crafting memorable experiences beyond Earth. Join us in traversing the stars.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 col-sm-6 mb-3">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 col-sm-6 mb-3 text-center">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center pt-3">
            <p className="footer-bottom-text">© 2024 Cosmo Voyage. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
