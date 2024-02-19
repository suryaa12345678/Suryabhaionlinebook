import React from 'react'

export default function Instagram() {
  return (
    <div className="bg-black ">
      <h1 className="front-banner-content-heading text-center text-white pt-5">
        Instagram
      </h1>

      <div className="instagram-container">
        <div className='insta-icons'>
        <img
        src="/Insta1.webp"
        alt=""
        width="100%"
      />
        </div>
        <div className='insta-icons'>
        <img
        src="/Insta2.webp"
        alt=""
        width="100%"
      />
        </div>
        <div className='insta-icons'>
        <img
        src="/Insta3.webp"
        alt=""
        width="100%"
      />
        </div>
      </div>
    </div>
  );
}
