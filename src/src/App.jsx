import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import "./App.css";


function App(){
    return (
        <div>
        <Header/>
        <About/>
        <Portfolio/>
        </div>
    )
}

export default App;