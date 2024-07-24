import Lottie from 'lottie-react';
import React from 'react';
import CustmService from './CustmService.json'

export default function CustomerSupport() {
  return (
    <div className="cust-sup-div bg-dark ">
      <div className="WrapperTransparent">
        <div className="cs-box2">
          <div>
            <Lottie animationData={CustmService} />
          </div>
          <div>
            <h1 className="front-banner-content-heading">24 HOURS SERVICES</h1>
          </div>
        </div>
        <div className="cs-box1">
          <h1 className="front-banner-content-heading supt_hed">Customer Support</h1>
          <h4>
            Get In Touch With SuryaBhai Online BOOK CUSTOMER CARE For Any Queries,
            Emergencies, Feedbacks or Complaints.
            <br />
            We Are Here To Help You 24/7
            With Our Online Services.
          </h4>
          <br />
          <hr className="Rotor-line" />
          <br />
          <h4>1 Minute Instant Deposit <br /> <br /> 5 Minute Superfast Withdrawls</h4>
          <br />
          <h4>Opportunity to win Big</h4>
          <br />
          <h4>Customer Care No. For WhatsApp & Calling</h4>
          <br />
          <a target="_blank" href="https://wa.me/918988844433" class="whatsappicon">
            <img src="./whatsapp.webp" alt="WhatsApp" width={'50px'} title="WhatsApp" /> +91 8988844433
          </a>
        </div>
      </div>
    </div>
  );
}
