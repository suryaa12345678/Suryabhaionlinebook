import React from 'react'

export default function Header() {
  return (
    <div className="header-div">
      <div className="header">
        <div className="logo">
          <img
            src='/Suryabhai_logo.png'
            alt=""
            height={"200px"}
          />
        </div>
        <div className="queries">
          <div className="box1 box">
            <h5>Veiw Our Partners</h5>
            <button className="btn golden-btn btn-warning">Click for demo</button>
          </div>
          <div className="box2 box">
            <h5>For Any Queries WhatsApp Us On</h5>
            <button className="btn golden-btn btn-warning">+91 8402849402</button>
            <br />
            <button className="btn golden-btn btn-warning">+91 9483828943</button>
          </div>
        </div>
      </div>

      <div className="front-banner">
        <div className="front-banner-content">
          <h1 className="front-banner-content-heading">
            AA ONLINE BOOK <br />
            THE BRAND YOU CAN TRUST
          </h1>
          <br />
          <h4 className="front-banner-content-sub-heading">
            KHELO AUR JEETO ASIA KI BIGGEST BOOK KE SATH
          </h4>
        </div>
        <div className="front-banner-image">
          <img className='bottom-right-image' src="https://www.aaonlinebook.com/images/girl2.png"  alt=""
          />
        </div>
      </div>
    </div>
  );
}
