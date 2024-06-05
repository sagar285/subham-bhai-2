import React from "react";

const VirtualTour = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-8">
        <div className="mx-auto  relative">
          <h2 className="text-green-800 text-3xl mb-4 text-center">Virtual Tour Request</h2>
          <div className="w-full relative">
            <img
              src="anandas_deskbanner2.webp"
              alt=""
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-white text-xl font-bold">Explore the Virtual Tour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
