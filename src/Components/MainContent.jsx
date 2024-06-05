import React from "react";
import { FaDownload } from "react-icons/fa";

const MainContent = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="w-full mt-5 p-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-green-800">
          Welcome To Godrej Ananda
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-8">
          A residential address in North Bangalore - Godrej Ananda, will have
          you living a high-end lifestyle with all the plush comforts of a posh
          city. Its 2 & 3 BHK urban homes and studio apartments come equipped
          with lavish interiors. The amenities here allow for unforgettable
          everyday moments - adrenaline-filled games at the Badminton court, fun
          skating sessions, lazily lie-ins at hammocks at the park, and more!
          You also get access to a Pharmacy, library, café, creche, and business
          space inside the premises.
        </p>
        <button className="bg-green-800 text-white px-4 sm:px-6 py-2 sm:py-3 mt-4 md:mt-8 rounded-lg flex items-center justify-center gap-2">
          <FaDownload />
          Download BROCHURE
        </button>
      </div>
    </div>
  );
};

export default MainContent;
