import React, { useState } from "react";
import {
  FaBuilding,
  FaCoins,
  FaDownload,
  FaHome,
  FaWifi,
  FaYoutube,
} from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row fixed z-20 bg-white w-full shadow-lg">
      <div className="flex justify-between items-center p-4 w-full md:w-auto">
        <img src="a_logo9.svg" alt="Logo" width="200px" />
        <button
          className="md:hidden text-black p-2 rounded"
          onClick={toggleNav}
        >
          {isOpen ? <IoMdClose/> :<IoMdMenu/>}
        </button>
      </div>
      <div
        className={`md:flex flex-col md:flex-row items-center ${
          isOpen ? "block" : "hidden"
        } w-full md:w-auto`}
      >
        <div className="p-4 border-b md:border flex justify-center items-center gap-2">
          <FaHome />
        </div>
        <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaCoins />
            <a href="#">Price</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaBuilding />
            <a href="#">Site & Floor Plan</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaWifi />
            <a href="#">Amenities</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <RiGalleryFill />
            <a href="#">Gallery</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaLocationDot />
            <a href="#">Location</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaYoutube />
            <a href="#">Virtual Site Visit</a>
          </div>
          <div className="flex flex-row px-3 py-4 md:py-0 border-b md:border-none justify-center items-center gap-2">
            <FaDownload />
            <a href="#">Download Brochure</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
