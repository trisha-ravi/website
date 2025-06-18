// components/Navbar.js - Minimal Apple-style Navbar
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Helper function to check if a path is active
  const isActive = (path) => {
    if (path === '/' || path === '/home') {
      return location.pathname === '/' || location.pathname === '/home' || location.pathname === '/website';
    }
    return location.pathname === path;
  };

  return (
    <nav className={`minimal-navbar ${showNavbar ? '' : 'hidden'}`}>
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        trisha
      </Link>

      {/* Main Navigation Links */}
      <div className="navbar-center">
        <Link 
          to="/about" 
          className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
        >
          About
        </Link>
        <Link 
          to="/work" 
          className={`navbar-link ${isActive('/work') || isActive('/projects') ? 'active' : ''}`}
        >
          Work
        </Link>
        {/* <Link 
          to="/sketchbook" 
          className={`navbar-link ${isActive('/sketchbook') ? 'active' : ''}`}
        >
          Sketchbook
        </Link> */}
       {/* <Link 
          to="/contact" 
          className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>*/}
      </div>

      {/* Gallery Link with Dots */}
      {/* <Link 
        to="/gallery" 
        className={`navbar-gallery ${isActive('/gallery') ? 'active' : ''}`}
      >
        <span className="gallery-dots">⋅⋅<br/>⋅⋅</span>
        Gallery
      </Link> */}
    </nav>
  );
};

export default Navbar;