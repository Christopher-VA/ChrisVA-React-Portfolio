import React from 'react';
import readmePNG from '../assets/README.png';
import weatherMap from '../assets/New-Search.png';
import password from "../assets/Example-of-password-created.png";
import "../css/Portfolio.css";

function Portfolio() {
    return (
        <div>
            <h2>Portfolio</h2>
        <div>
            <h3>README Generator</h3>
            <a href="https://github.com/Christopher-VA/README-Generator">
                <img class="card" src={readmePNG}/>
            </a>
        </div>
        <div>
            <h3>Weather Map</h3>
            <a href="https://github.com/Christopher-VA/README-Generator">
                <img class="card" src={weatherMap}/>
            </a>
        </div>
        <div>
            <h3>Password Creator</h3>
            <a href="https://github.com/Christopher-VA/Password-Creator">
                <img class="card" src={password}/>
            </a>
        </div>
        <div>
            <h3>Notes Taker</h3>
            <a href="https://github.com/Christopher-VA/Password-Creator">
                <img class="card" src={password}/>
            </a>
        </div>
        </div>
    )
}

export default Portfolio;