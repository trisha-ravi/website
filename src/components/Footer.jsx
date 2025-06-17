// components/Footer.js - Reusable Footer Component
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    {
      category: 'Networking',
      items: [{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/trisha-ravichandran/', icon: '↗', external: true }]
    },
    // {
    //   category: 'Illustrations',
    //   items: [{ name: 'Sketchbook', url: '/sketchbook', icon: '↗', external: false }]
    // },
    // {
    //   category: 'Latest Projects',
    //   items: [{ name: 'Instagram', url: 'https://instagram.com/trisha', icon: '↗', external: true }]
    // },
    // {
    //   category: 'Latest Updates',
    //   items: [{ name: 'X (Twitter)', url: 'https://twitter.com/trisha', icon: '↗', external: true }]
    // },
    // {
    //   category: 'Moodboard',
    //   items: [{ name: 'Savee', url: 'https://savee.it/trisha', icon: '↗', external: true }]
    // },
    {
      category: 'Connect',
      items: [{ name: 'Mail', url: 'mailto:trisha02.r@gmail.com', icon: '↗', external: true }]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-contact">
          <h2 className="footer-title">
            Let's work together <span className="wave-emoji">👋</span>
          </h2>
          <p className="footer-subtitle">Get in touch.</p>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Footer Info */}
        <div className="footer-info">
          {/* Left Side - Copyright */}
          <div className="footer-copyright">
            <p className="copyright-text">© 2025 Trisha Ravichandran</p>
            <p className="status-text">Currently blooming.</p>
          </div>

          {/* Right Side - Links */}
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="link-group">
                <span className="link-category">{section.category}</span>
                {section.items.map((item, itemIndex) => (
                  item.external ? (
                    <a
                      key={itemIndex}
                      href={item.url}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name} {item.icon}
                    </a>
                  ) : (
                    <Link
                      key={itemIndex}
                      to={item.url}
                      className="footer-link"
                    >
                      {item.name} {item.icon}
                    </Link>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;