import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/website">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="https://www.linkedin.com/in/trisha-ravichandran/" target="_blank" rel="noopener noreferrer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
