"use client"
import React from "react";
import PriceTable from "./PriceTable";
import ImageGallery from "./ImageGallery";
import FloorPlan from "./FloorPlan";
import GalleryTwo from "./GalleryTwo";
import Location from "./Location";
import VirtualTour from "./VirtualTour";
import About from "./About";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Slider from "./Slider";
import SideBar from "./SideBar";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full sm:w-4/5 overflow-hidden">
        <Nav />
        <Slider />
        <MainContent />
        <PriceTable />
        <FloorPlan />
        <div className="bg-gray-200 p-4">
          <div className="bg-white p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="font-bold text-green-800 text-xl sm:text-2xl">
                Amenities Of Godrej Ananda
              </h2>
              <button className="bg-green-800 text-white px-4 sm:px-6 py-2 mt-2 sm:mt-0 rounded">
                Download Amenities
              </button>
            </div>
            <ImageGallery />
          </div>
        </div>
        <GalleryTwo />
        <Location />
        <VirtualTour />
        <About />
        <Footer />
      </div>
      <SideBar className="hidden sm:block w-1/5" />
    </div>
  );
};

export default Navbar;
