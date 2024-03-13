import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navigation.css";

function Navigation() {
    return (
        <nav id="Navi">
            <Link key={1} className="nav-link text-light" to="/about">
          About Me
        </Link>|
        <Link key={2} className="nav-link text-light" to="/contact">
          Contact
        </Link>|
        <Link key={3} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>|
        <Link key={4} className="nav-link text-light" to="/resume">
          Resume
        </Link>  
        </nav>
    )
}

export default Navigation;