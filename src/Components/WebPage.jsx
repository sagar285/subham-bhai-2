"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
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

const WebPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-4/5 flex flex-col">
        <Nav />

        <div className="mt-20">
          {" "}
          {/* Add a margin-top to account for the fixed navbar height */}
          <Slider />
          <MainContent />
          <PriceTable />
          <FloorPlan />
          <ImageGallery />
          <ImageGallery />
          <GalleryTwo />
          <Location />
          <VirtualTour />
          <About />
          <Footer />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-1/5 bg-green-500 p-4 text-white flex flex-col justify-between fixed right-0 top-0 h-screen">
        <SideBar />
      </div>
    </div>
  );
};

export default WebPage;
