import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <div class="container">
  <div class="Title">
    <h1>Header title
      <div class="Title__highlight"></div>
    </h1>
    <div class="Title__underline"></div>
    <div aria-hidden class="Title__filled">Header title</div>
  </div>
</div>
            <p>blah blah blah</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>            
        </div>
    )
}

export default HeroSection
