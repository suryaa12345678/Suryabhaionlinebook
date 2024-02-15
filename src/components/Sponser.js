import React from 'react'
import CardItem from './CardItem';

export default function Sponser() {
  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5 sponser_hed">View our partners</h1>
      <div className="sponser-list">
        <div className='card-container'>
        <CardItem
          link={"/SportbuzexchLogo.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"/sportbuzz777logo.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"/SportbuzexchLogo.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"/SportbuzexchLogo.png"}
          width={"80%"}
        />
        </div>
      </div>
    </div>
  );
}
