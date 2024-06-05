import React from "react";
import { IoLocation } from "react-icons/io5";

const Location = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-8">
        <h2 className="text-green-800 text-2xl">Address Of Godrej Ananda</h2>
        <div className="mt-4">
          <h3 className="font-bold text-xl">Map View</h3>
          <div className="flex flex-col lg:flex-row justify-evenly mt-4 gap-4">
            <div className="w-full lg:w-[50%] h-64 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.7202309566!2d76.82493609391429!3d28.423160293047264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1717562310133!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full lg:w-[40%]">
              <h3 className="font-bold text-xl">Location Map</h3>
              <div className="border">
                <img src="anandas_locationmap_01.webp" alt="Location Map" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-4">
          <div className="flex-1">
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>Bangalore International Airport - 15 mins</span>
            </div>
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>Delhi Public School - 12 mins</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>Cratis Hospital - 21 mins</span>
            </div>
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>Manyata Tech Park - 26 mins</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>Oxford Group of Institutions - 15 mins</span>
            </div>
            <div className="flex items-center mt-4">
              <IoLocation className="text-green-800 text-2xl mr-2" />
              <span>RMZ Galleria Mall - 26 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
