import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from 'react-modal'; // Import react-modal

const Carousel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to open the popup video
  const openPopupVideo = (videoUrl) => {
    setVideoUrl(videoUrl);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closePopup = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="bg-black text-white text-center carosal-heading">
      <h1 className='front-banner-content-heading'>Celebrity Love</h1>
      <Slider {...settings}>
        <div className="actor-talk">
          <img
            src="/celb1.jpg"
            alt="Image 1"
            className="center-image"
            onClick={() => openPopupVideo('#')} 
          />
        </div>
        <div className="actor-talk">
          <img
            src="/celb2.jpg"
            alt="Image 2"
            className="center-image"
            onClick={() => openPopupVideo('#')}
          />
        </div>
        <div className="actor-talk">
          <img
            src="/celb3.jpg_large"
            alt="Image 3"
            className="center-image"
            onClick={() => openPopupVideo('#')}
          />
        </div>
        <div className="actor-talk">
          <img
            src="/celb4.jpg"
            alt="Image 4"
            className="center-image"
            onClick={() => openPopupVideo('#')}
          />
        </div>
      </Slider>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closePopup}
        contentLabel="Video Modal"
      >
        <iframe
          height="400"
          src={videoUrl}
          title="Popup Video"
          frameBorder="0"
          allowFullScreen
        ></iframe> <br />
        <button className='btn btn-warning' onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default Carousel;
