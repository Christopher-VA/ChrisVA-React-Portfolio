import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <a href="/About">About Me</a>
            <a href="/Contact">Contact</a>
            <a href="/Portfolio">Portfolio</a>
            <a href="/Resume">Resume</a>
        </nav>
    )
}

export default Navigation;