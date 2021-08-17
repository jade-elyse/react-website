import React from 'react';
import '../../App.css';

export default function AboutMe() {
  return (
    <div className="full-container">
    <div className='hero-container'>
    <video src="/videos/video-3.mp4" autoPlay loop muted />
    <div class="container">
    <div class="Title">
        <h1>About Me :D
        <div class="Title__highlight"></div>
        </h1>
        <div class="Title__underline"></div>
        <div aria-hidden class="Title__filled">About Me :D</div>
    </div>
    </div>
    </div>
    <div className="text-box">
      <h1>Some of my hobbies</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet malesuada ante. Integer pellentesque purus lorem, in porttitor mauris tristique quis. Nunc lectus eros, fermentum eget hendrerit in, dignissim non magna. Duis orci augue, porttitor sed arcu eget, vestibulum tincidunt neque. Maecenas tristique enim non velit congue, et sollicitudin augue ornare. Duis scelerisque justo et mattis vulputate. In auctor leo ut luctus euismod. Nulla sed est turpis. Mauris facilisis lacinia nisi. In sit amet neque ut sem elementum faucibus. Donec semper nec ipsum vel placerat.</p>  
    </div>
    </div>
)}