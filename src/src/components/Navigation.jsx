import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <a href="/about">About Me</a>
            <a href="/contact">Contact</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/resume">Resume</a>
        </nav>
    )
}

export default Navigation;