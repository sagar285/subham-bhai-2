import { useState, useEffect } from "react";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "anandas_g1.webp",
    "anandas_deskbanner1.webp",
    "anandas_deskbanner2.webp",
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-14">
      <div className="relative w-full">
        <div className="carousel relative overflow-hidden">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full object-cover h-64 sm:h-96 md:h-[550px] rounded-lg"
          />
        </div>
 
      </div>
    </div>
  );
};

export default Slider;
