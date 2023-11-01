import { useEffect, useContext, useState } from 'react';
import './MiddleContent.scss';
import CardSlider from '../CardSlider/CardSlider'
import resortLogo from '../../assets/resort.svg'
const MiddleContent=()=>
{
    return (
        <div className="main">
            <div className="info">
                <div className="resort-svg">
                <img  src={resortLogo} alt="" />
                </div>
                <div className="welcome-text">
                <p>WELCOME TO COZYSTAY RESORT</p>
              
                </div>
                
            </div>
            <div className="quote">
                    <div className="heading">
                    <h1>In the Heart of the South Pacific, Outstanding Views</h1>
                    </div>
                    <div className="intro-text">
                    <p>Nestled in the heart of the Pacific Islands resort, on the edge of a tranquil and beautiful Garden Island, CozyStay is a haven of warmth, tranquility and rejuvenation. Bathed in brilliant sunshine and clear skies, it offers stunning views of palm-lined beaches and gorgeous coral reefs.</p>
                    </div>
            </div>
            <div className="vacay-cards">
                <div className="cards">
                    <CardSlider />
                </div>
                <div className="quote2">
                    <p>Inspired by our history, surrounded by nature and designed to offer a different experience</p>
                </div>
            </div>
        </div>
    );
}
export default MiddleContent;