import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Check out my social media down below :D
        </p> */}
        <h2 className='footer-link-items'>Social Media</h2>
        <div className='social-links'>
          <a href="https://en-gb.facebook.com/">Facebook</a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.youtube.com/">YouTube</a>
          <a href="https://twitter.com/">Twitter</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
          <a href="https://github.com/">Github</a>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Jade
              <i class="fas fa-rocket" ></i>
            </Link>
          </div>
          <small class='website-rights'>Jade © 2021</small>
          <div class='social-icons'>
            <a href="https://en-gb.facebook.com/" class="fab fa-facebook-f" />
            <a href="https://www.instagram.com/" class="fab fab fa-instagram" />
            <a href="https://www.youtube.com/" class="fab fa-youtube" />
            <a href="https://twitter.com/" class="fab fa-twitter" />
            <a href="https://www.linkedin.com/" class="fab fa-linkedin" />
            <a href="https://github.com/" class="fab fa-brands fa-github" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;