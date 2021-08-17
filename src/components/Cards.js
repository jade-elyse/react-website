import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Find out more about me below :D</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Currently working at the BBC as a New Talent Apprentice'
              label='Work'
              path='/work'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Studying to become a full time Software Engineer at University of Glasgow'
              label='University'
              path='/university'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Hobbies and things that I enjoy doing in my spare time 👀 '
              label='About Me'
              path='/about-me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;