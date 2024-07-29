import React from 'react'

export default function Contact() {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, '_blank');
  };
  return (
    <div className="contact-outer-div bg-black text-white">
      <div className="contact-container ">
        <div className="contact-box1">
          <img
            src="/Suryabhailogo.webp"
            alt=""
            width={"80%"}
          />

          <p className='text-center nomior'>
            <img
              src="/noMinors.png"
              alt=""
              width={"25px"}
            />
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

          <div className='whatsappDetails'>
            <p className="contact-content">Whatsapp us on:</p>
            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811144")} >+91 8988811144</button>
            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://wa.me/918988811144")} >+91 8988811144</button>
            <p className="contact-content">
              With Our Step-By-Step Guide For Beginners
            </p>
            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://t.me/suryabhaionlinebookofficial/")}><img src="./telegram.webp" alt="WhatsApp" width={'30px'} title="WhatsApp" />Telegram</button>
            <button className="btn golden-btn btn-warning" onClick={() => handleButtonClick("https://www.instagram.com/suryabhaionlinebookofficial/")}><img src="./Instagram.webp" alt="WhatsApp" width={'30px'} title="WhatsApp" />Instagram</button>
          </div>

        </div>
      </div>
    </div>
  );
}
