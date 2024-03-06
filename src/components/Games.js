import React from 'react'
import CardItem from './CardItem'
import Lottie from 'lottie-react';
import Cricket from './Cricket.json';
import Tennis from './Tennis.json';
import Football from './Football.json';
import Casino from './Casino.json';
import Tpatti from './Tpatti.json';
import Whatsapp from './Whatsapp.json';

export default function Games() {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, '_blank');
  };
  return (
    <div className="games-div golden-background">
      <div className='gamesContent'>
        <h1 className="front-banner-content-heading games-heading">
          How to play
        </h1>
        <h2>Your bet in our IDs</h2>
        <p className="games-content">
          With Our Step-By-Step Guide For Beginners, Get Started Playing. Start
          Learning Now.. 24/7 ACTIVE.
        </p>
        <hr className="Rotor-line games-line" />
        <br />
        <a target="_blank" href="https://wa.me/918988811155" class="claimButton golden-btn"><span>Get your free ID Here</span></a>
        <p className="games-message">
          We Deal Only On WhatsApp
        </p>
        <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811155")}>+91 8988811155</button>
        <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811166")}>+91 8988811166</button>
      </div>
      <div className="games-logo-container">
        <div className='card-container'>
          <div className='animation'>
            <Lottie animationData={Cricket} />
          </div>
          <div className='gname'>
            Cricket
          </div>
        </div>
        <div className='card-container'>
          <div className='animation'>
            <Lottie animationData={Football}
            />
          </div>
          <div className='gname'>
            Football
          </div>
        </div>
        <div className='card-container'>

          <div className='animation'>
            <Lottie animationData={Tennis}
            />
          </div>
          <div className='gname'>
            Tennis
          </div>
        </div>
        <div className='card-container'>
          <div className='animation'>
            <Lottie animationData={Casino}
            />
          </div>
          <div className='gname'>
            Casino
          </div>
        </div>
        <div className='card-container'>
          <div className='animation'>
            <Lottie animationData={Tpatti}
            />
          </div>
          <div className='gname'>
            Teen Paati
          </div>
        </div>
      </div>
    </div>
  );
}
