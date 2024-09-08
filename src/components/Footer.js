// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [footerData] = useState({
    copyright: '© 2024 Ishwar Sharma. All rights reserved.',
    socialLinks: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile' },
      { name: 'GitHub', url: 'https://github.com/yourprofile' },
      { name: 'Twitter', url: 'https://twitter.com/yourprofile' }
    ]
  });

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{footerData.copyright}</p>
        <div className="social-links">
          {footerData.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
