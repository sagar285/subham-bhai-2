import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesPerRow: 1,
    rows: 2,
    swipeToSlide: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 640, // Mobile screen
        settings: {
          slidesToShow: 1,
          rows: 1,
          centerPadding: "30px", // Adjust padding for mobile
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768, // Tablet screen
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 1024, // Small desktop
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 1280, // Large desktop
        settings: {
          slidesToShow: 4,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_petpark_01.webp"
            alt="Pet Park"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Pet Park
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_multihall_01.webp"
            alt="Multi Purpose Hall"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Multi Purpose Hall
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_salon_01.webp"
            alt="Salon & Spa"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Salon & Spa
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_pharmacy_01.webp"
            alt="Pharmacy"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Pharmacy
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_skatting_01.webp"
            alt="Skating Rink"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Skating Rink
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_swmming_01.webp"
            alt="Swimming Pool"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Swimming Pool
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_jogging_01.webp"
            alt="Jogging"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Jogging
          </h3>
        </div>
        <div className="image-container mx-2 relative">
          <img
            src="anandas_creche_01.webp"
            alt="Creche"
            className="rounded-xl w-full"
          />
          <h3 className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded-xl">
            Creche
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default ImageGallery;
