import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Your Startup Name. All rights reserved.</p>
      <p>
        <Link to="/Contact">Contact Us</Link>
      </p>
    </div>
  </footer>
);

export default Footer;
