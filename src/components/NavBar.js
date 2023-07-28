import React from 'react';
import '../styles/NavBar.css'; // import the CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav className="navbar">
    //   <ul>
    //   <li><a href="/">Home</a></li>
    //     <li><a href="/about">About</a></li>
    //     <li><a href="/contact">Contact</a></li>
    //     <li><a href="/#">Contact</a></li>
    //     <li><a href="/#">Contact</a></li>
    //   </ul>
    // </nav>

    <nav className="navbar">
    <ul>
        <li className="navbar-title">Alex Savage's Coding Portfolio</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    </nav>
  );
}

export default Navbar;
