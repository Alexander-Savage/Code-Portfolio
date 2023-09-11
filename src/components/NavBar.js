import React from 'react';
import '../styles/NavBar.css'; // import the CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
    <ul>
        <li className="navbar-title">Alex Savage's Coding Portfolio</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact/Recruitment</Link></li>
    </ul>
    </nav>
  );
}

export default Navbar;
