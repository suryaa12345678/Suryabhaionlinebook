import React from 'react'

export default function Header() {
  return (
    <div className="header-div">
      <div className="header">
        <div className="logo">
          <img
            src="https://www.aaonlinebook.com/images/online%20book%20logo-02%20(1).png"
            alt=""
            height={"200px"}
          />
        </div>
        <div className="queries">
          <div className="box1 box">
            <h5>Veiw Our Partners</h5>
            <button className="btn btn-warning">Click for demo</button>
          </div>
          <div className="box2 box">
            <h5>For Any Queries WhatsApp Us On</h5>
            <button className="btn btn-warning">+918402849402</button>
            <br /> <br />
            <button className="btn btn-warning">+919483828943</button>
          </div>
        </div>
      </div>

      <div className="front-banner">
        <div className="front-banner-content">
          <h1 className="front-banner-content-heading">
            AA ONLINE BOOK THE BRAND YOU CAN TRUST
          </h1>
          <br />
          <h4 className="front-banner-content-sub-heading">
            KHELO AUR JEETO ASIA KI BIGGEST BOOK KE SATH
          </h4>
        </div>
        <div className="front-banner-image">
          <img width={'100%'} src="https://www.aaonlinebook.com/images/girl2.png" 
          />
        </div>
      </div>
    </div>
  );
}
