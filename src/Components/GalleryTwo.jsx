import React from "react";

const GalleryTwo = () => {
  return (
    <div className="p-4">
      <div className="mt-2 bg-white">
        <div className="flex flex-col md:flex-row justify-between p-6">
          <h2 className="font-bold text-green-800 text-2xl">
            Gallery Of Godrej Ananda
          </h2>
          <button className="mt-4 md:mt-0 bg-green-800 text-white px-4 py-2 rounded">
            Download Gallery
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-6">
          <div className="w-full md:w-1/4">
            <img src="anandas_g1.webp" alt="" className="rounded-2xl w-full" />
          </div>
          <div className="w-full md:w-1/4">
            <img src="anandas_g2.webp" alt="" className="rounded-2xl w-full" />
          </div>
          <div className="w-full md:w-1/4">
            <img src="anandas_g3.webp" alt="" className="rounded-2xl w-full" />
          </div>
          <div className="w-full md:w-1/4">
            <img src="anandas_g4.webp" alt="" className="rounded-2xl w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;
