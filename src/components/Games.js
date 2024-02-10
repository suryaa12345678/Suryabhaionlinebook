import React from 'react'
import CardItem from './CardItem'

export default function Games() {
  return (
    <div className="games-div">
      <h1 className="front-banner-content-heading games-heading">
        How to place
      </h1>
      <h2>Your bet in our IDs</h2>
      <p className="games-content">
        With Our Step-By-Step Guide For Beginners, Get Started Playing. Start
        Learning Now.. 24/7 ACTIVE.
      </p>
      <hr className="Rotor-line games-line" />
      <br />
      <p className="games-content">We Deal Only On WhatsApp</p>
      <button className="btn btn-warning">+911234567890</button> &nbsp;&nbsp;
      <button className="btn btn-warning">+918493789483</button>
      <div className="games-logo-container">
        <CardItem
          link={"https://www.aaonlinebook.com/images/crr.png"}
          width={"130px"}
          label={"Cricket"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/boot.png"}
          width={"130px"}
          label={"Football"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/ten.png"}
          width={"130px"}
          label={"Tennis"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/cas.png"}
          width={"130px"}
          label={"Casino"}
        />
        <CardItem
          link={"https://www.aaonlinebook.com/images/teen.png"}
          width={"130px"}
          label={"Teen Patti"}
        />
      </div>
    </div>
  );
}
