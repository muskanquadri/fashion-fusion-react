// src/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fashion Fusion</h3>
          <p>Trendy fashion, unbeatable prices. Your style destination.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@fashionfusion.in</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Fashion Fusion. All rights reserved.</p>
      </div>
      
    </footer>
    
  );
}

export default Footer;