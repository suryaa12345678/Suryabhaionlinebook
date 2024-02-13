import React from 'react'
import CardItem from './CardItem'

export default function Games() {
  return (
    <div className="games-div">
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
      <p className="games-message">We Deal Only On WhatsApp</p>
      <button className="btn btn-warning">+91 1234567890</button>
      <button className="btn btn-warning">+91 8493789483</button>
      <div className="games-logo-container">
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/crr.png"}
          width={"80%"}
          label={"Cricket"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/boot.png"}
          width={"80%"}
          label={"Football"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/ten.png"}
          width={"80%"}
          label={"Tennis"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/cas.png"}
          width={"80%"}
          label={"Casino"}
        />
        </div>
        <div className='card-container'>
        <CardItem
          link={"https://www.aaonlinebook.com/images/teen.png"}
          width={"80%"}
          label={"Teen Patti"}
        />
        </div>
      </div>
    </div>
  );
}
