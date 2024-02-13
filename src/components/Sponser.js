import React from 'react'
import CardItem from './CardItem';

export default function Sponser() {
  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5 sponser_hed">AVAILABLE SITES</h1>
      <div className="sponser-list">
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/logo21.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"80%"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/lotus299.png"}
          width={"80%"}
        />
        </div>
      </div>
    </div>
  );
}
