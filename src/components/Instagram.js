import React from 'react'
import CardItem from './CardItem';

export default function Instagram() {
  return (
    <div className="bg-black ">
      <h1 className="front-banner-content-heading text-center text-white pt-5">
        Instagram
      </h1>

      <div className="instagram-container">
        <CardItem
          link={
            "https://www.aaonlinebook.com/images/FS_14-October_AA-Online-Book.jpg"
          }
          width={"240px"}
        />
        <CardItem
          link={
            "https://www.aaonlinebook.com/images/CMOD_14-October_AA-Online-Book.jpg"
          }
          width={"240px"}
        />
        <CardItem
          link={
            "https://www.aaonlinebook.com/images/CS_14-October_AA-Online-Book.jpg"
          }
          width={"240px"}
        />
        <CardItem
          link={
            "https://www.aaonlinebook.com/images/FMOD_14-October_AA-Online-Book.jpg"
          }
          width={"240px"}
        />
      </div>
    </div>
  );
}
