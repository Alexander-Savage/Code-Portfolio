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
        <li class="dropdown">
        
      <a href="#">projects</a>
      <ul class="dropdown-menu">
        <li><Link to="/projects/breast-cancer-predictor">breast cancer predictor</Link></li>
        <li><a href="#">Option 2</a></li>
        <li><a href="#">Option 3</a></li>
      </ul>
    </li>
        <li><Link to="/contact">Contact/Recruitment</Link></li>
    </ul>
    </nav>
  );
}


export default Navbar;
