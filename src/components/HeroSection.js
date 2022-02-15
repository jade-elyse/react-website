import React from 'react';
import '../App.css';
import './HeroSection.scss';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <div class="container">
            <div class="Title">
                <h1>i'm jade 
                <div class="Title__highlight"></div>
                </h1>
                <div class="Title__underline"></div>
                <div aria-hidden class="Title__filled">i'm jade</div>
            </div>
            </div>
            <p>A Software Engineer Graduate Apprentice</p>         
        </div>
    )
}

export default HeroSection
