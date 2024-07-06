import React from 'react'

export default function Header() {
  return (
    <div className="header-div">
      <div className="header">
        <div className="logo">
          <img
            src='/Suryabhailogo.png'
            alt=""
            height={"350px"}
          />
        </div>
        <div className="queries">
          <div className="box1 box">
            <h5>Veiw Our Partners</h5>
            <button className="btn golden-btn btn-warning">Click for demo</button>
          </div>
          <div className="box2 box">
            <h5>For Any Queries WhatsApp Us On</h5>
            <button className="btn golden-btn btn-warning">+91 8988844411</button>
            <br />
            <button className="btn golden-btn btn-warning">+91 8988844422</button>
          </div>
        </div>
      </div>

      <div className="front-banner">
        <div className="front-banner-content">
          <span>
            <h1 className="front-banner-content-heading">
              SuryaBhai <br />ONLINE BOOK
            </h1>
          </span>
          <h4 className="front-banner-content-sub-heading">
            Favourite of north and south punters
          </h4>
          <br />
          <h4 className="front-banner-content-sub-heading">
            Play online for real money in India and make bet on games like Cricket, Casino, Football, Tennis and many more.
          </h4>
        </div>
        <div className="front-banner-image">
          <img className='bottom-right-image' src="https://www.aaonlinebook.com/images/girl2.png" alt=""
          />
        </div>
      </div>
    </div>
  );
}
