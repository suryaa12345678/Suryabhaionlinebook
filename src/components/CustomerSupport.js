import React from 'react'

export default function CustomerSupport() {
  return (
    <div className="cust-sup-div bg-dark">
      <div className="cs-box1">
        <h1 className="front-banner-content-heading supt_hed">Customer Support</h1>
        <h4>
          Get In Touch With AA Online BOOK CUSTOMER CARE For Any Queries,
          Emergencies, Feedbacks or Complaints. We Are Here To Help You 24/7
          With Our Online Services.
              </h4>
              <br />
              <hr className="Rotor-line" />
              <br />
              <h4>Customer Care No. For WhatsApp & Calling</h4>
              <br />
        <div className='custbtn'>
        <button className="btn golden-btn btn-warning">+918408922205</button>
        </div>
      </div>
      <div className="cs-box2">
        <div>
        <img
          src="/Suryabhailogo.png"
                  alt=""
                  width={'100%'}
        />
        </div>
        <div>
        <h1 className="front-banner-content-heading">24 HOURS SERVICES</h1>
        </div>
      </div>
    </div>
  );
}
