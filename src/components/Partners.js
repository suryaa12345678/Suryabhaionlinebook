import React, { useState } from 'react';
import Modal from 'react-modal';
import CardItem from './CardItem';

export default function Partners() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ username: '', id: '' });

  const handleCardClick = (username, id, url) => {
    setSelectedCard({ username, id });
    // setModalIsOpen(true);

    const isConfirmed = window.confirm(`Do you want to continue to partners? \nUsername: ${username}, \nID: ${id}`);

    if (isConfirmed) {
      window.open(url, '_blank');
    }

  };

  // const handleContinueClick = (url) => {
  //   window.open(url, '_blank');
  // };

  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5 sponser_hed">View our Partners</h1>
      <div className="sponser-list">
        <div className='card-container'>
          <CardItem
            link={"/SportBuzzExch.webp"}
            width={"80%"}
            heading={"SportBuzzExch"}
            onClick={() => handleCardClick("Sportbuzz", "Asdf1111", "http://www.sportbuzzexch.com")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"./sportbuzz777.webp"}
            width={"80%"}
            heading={"SportBuzz777"}
            onClick={() => handleCardClick("Buzz777demo", "Asdf1111", "http://www.sportbuzz777.com")}
          />
          
        </div>
        <div className='card-container'>
          <CardItem
            link={"./SuryaBhaiBuzz.webp"}
            width={"80%"}
            heading={"SuryaBhaiBuzz"}
            onClick={() => handleCardClick("Buzzdemo", "Asdf1111", "http://www.suryabhaibuzz.com")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"./SuryaBhai247.webp"}
            width={"80%"}
            heading={"SuryaBhai247"}
            onClick={() => handleCardClick("Suryasky", "Asdf1111", "http://www.suryabhai247.com")}
          />
        </div>
      </div>


      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}>
        <h2 className="modal-heading">Username: {selectedCard.username}</h2>
        <h2>ID: {selectedCard.id}</h2>
        <button className="modal-button" onClick={() => handleContinueClick("http://www.sportbuzzexch.com")} >Continue to partners</button>
      </Modal> */}
    </div>
  );
}
