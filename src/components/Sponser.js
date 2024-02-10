import React from 'react'
import CardItem from './CardItem';

export default function Sponser() {
  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5">AVAILABLE SITES</h1>
      <div className="sponser-list">
        <CardItem
          link={"https://www.aaonlinebook.com/images/logo21.png"}
          width={"200px"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"200px"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"200px"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/AA-Online-777.png"}
          width={"200px"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/lotus299.png"}
          width={"200px"}
        />
      </div>
    </div>
  );
}
