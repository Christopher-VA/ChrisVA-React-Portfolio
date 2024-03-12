import React from 'react';
import readmePNG from '../assets/README.png';
import weatherMap from '../assets/New-Search.png';

function Portfolio() {
    return (
        <>
        <div>
            <a href="https://github.com/Christopher-VA/README-Generator">
                <img src={readmePNG}/>
            </a>
        </div>
        <div>
            <a href="https://github.com/Christopher-VA/README-Generator">
                <img src={weatherMap}/>
            </a>
        </div>
        </>
    )
}

export default Portfolio;