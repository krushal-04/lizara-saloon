import React from "react";
import Slider from "react-slick";
import "./AutoPlay.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices (landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small mobile devices (portrait)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/images/hair.jpg" alt="slider1" className="slider-image" />
        </div>
        <div>
          <img src="/images/card2.jfif" alt="slider2" className="slider-image" />
        </div>
        <div>
          <img src="/images/profile1.jpg" alt="slider3" className="slider-image" />
        </div>
        <div>
          <img src="/images/profile.jfif" alt="slider4" className="slider-image" />
        </div>
        <div>
          <img src="/images/hair.jpg" alt="slider5" className="slider-image" />
        </div>
        <div>
          <img src="/images/card2.jfif" alt="slider6" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
