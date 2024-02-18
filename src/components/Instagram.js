import React from 'react'
import CardItem from './CardItem';

export default function Instagram() {
  return (
    <div className="bg-black ">
      <h1 className="front-banner-content-heading text-center text-white pt-5">
        Instagram
      </h1>

      <div className="instagram-container">
        <div className='insta-icons'>
        <CardItem
          link={
            "/Insta1.webp"
          }
          width={"90%"}
        />
        </div>
        <div className='insta-icons'>
        <CardItem
          link={
            "/Insta2.webp"
          }
          width={"90%"}
        />
        </div>
        <div className='insta-icons'>
        <CardItem
          link={
            "/Insta3.webp"
          }
          width={"90%"}
        />
        </div>
      </div>
    </div>
  );
}
