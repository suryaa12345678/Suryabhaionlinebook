import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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

  return (
    <div className="bg-black text-white text-center carosal-heading ">
      <h1>Celebrity Love For AA Online</h1>
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.britannica.com/12/215912-050-02257657/Indian-actor-Amitabh-Bachchan-2013.jpg"
            alt="Image 1"
            style={{ width: "45vw", height: "70vh" }}
          />
        </div>
        <div>
          <img
            src="https://www.financialexpress.com/wp-content/uploads/2023/01/Shahid-Kapoor-n-1200by667.jpg"
            alt="Image 2"
            style={{ width: "45vw", height: "70vh" }}
          />
        </div>
        <div>
          <img
            src="https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/11/salman-khan-18.jpg?size=*:900"
            alt="Image 3"
            style={{ width: "45vw", height: "70vh" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;