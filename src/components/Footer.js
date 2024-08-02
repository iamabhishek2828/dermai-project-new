// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 DermAi. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

