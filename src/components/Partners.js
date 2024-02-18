import React, { useState } from 'react';
import Modal from 'react-modal';
import CardItem from './CardItem';

export default function Partners() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ username: '', id: '' });

  const handleCardClick = (username, id) => {
    setSelectedCard({ username, id });
    setModalIsOpen(true);
  };

  const handleContinueClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="Sponser-div bg-black text-light">
      <h1 className="front-banner-content-heading p-5 sponser_hed">View our partners</h1>
      <div className="sponser-list">
        <div className='card-container'>
          <CardItem
            link={"/SportBuzzExch.png"}
            width={"80%"}
            onClick={() => handleCardClick("Sportbuzz", "Asdf1111")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"./sportbuzz777.png"}
            width={"80%"}
            onClick={() => handleCardClick("Buzz777demo", "Asdf1111")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"./SuryaBhaiBuzz.png"}
            width={"80%"}
            onClick={() => handleCardClick("Buzzdemo", "Asdf1111")}
          />
        </div>
        <div className='card-container'>
          <CardItem
            link={"./SuryaBhai247.png"}
            width={"80%"}
            onClick={() => handleCardClick("Suryasky", "Asdf1111")}
          />
        </div>
      </div>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}>
        <h2 className="modal-heading">Username: {selectedCard.username}</h2>
        <h2>ID: {selectedCard.id}</h2>
        <button className="modal-button" onClick={() => handleContinueClick("http://www.sportbuzzexch.com")} >Continue to partners</button>
      </Modal>
    </div>
  );
}
