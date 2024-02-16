import React from 'react'

export default function Contact() {
  return (
    <div className="contact-outer-div bg-black text-white">
      <div className="contact-container ">
        <div className="contact-box1">
          <img
            src="/Suryabhailogo.png"
            alt=""
            width={"300px"}
          />
          <p className='text-center'>
            --Underage gambling is an offence--
          </p>
        </div>
        <div className="contact-box2">
          <h1 className="front-banner-content-heading">
            Get In Touch With SuryaBhai Online Book Customer Care
          </h1>
          <p className="contact-content">
            For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here
            To Help You 24/7 With Our Online Services.
          </p>
          <hr />
          <div className='whatsappContact'>
            <div className='whatsappImage'>
              <img src='/whatsapp.png' width={'250px'} />
            </div>
            <div className='whatsappDetails'>
              <p className="contact-content">Whatsapp us on:</p>
              <button className="btn golden-btn btn-warning">+91 8988811133</button>
              <button className="btn golden-btn btn-warning">+91 8988811144</button>
              <p className="contact-content">
                With Our Step-By-Step Guide For Beginners
              </p>
              <button className="btn golden-btn btn-warning">+91 8988811133</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
