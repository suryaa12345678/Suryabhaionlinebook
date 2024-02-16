// Sponser.js
import React from 'react';
import CardItem from './CardItem';

export default function Sponser() {
  const handleCardClick = (url) => {
    // Open a new page using the specified URL
    window.open(url, '_blank');
  };

  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5 sponser_hed">View our partners</h1>
      <div className="sponser-list">
        <div className='card-container'>
          <CardItem
            link={"/SportBuzzExch.png"}
            width={"80%"}
            onClick={() => handleCardClick("http://Www.sportbuzzexch.com")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"/sportbuzz777.png"}
            width={"80%"}
            onClick={() => handleCardClick("http://Www.sportbuzz777.com")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"/SuryaBhaiBuzz.png"}
            width={"80%"}
            onClick={() => handleCardClick("http://Www.suryabhaibuzz.com")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"/SportbuzzExch.png"}
            width={"80%"}
            onClick={() => handleCardClick("http://Www.suryabhai247.com")}
          />
        </div>
      </div>
    </div>
  );
}
