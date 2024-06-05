import React from "react";

const FloorPlan = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="floor mt-2 bg-white p-4 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800">
          Site & Floor Plan Of Godrej Ananda
        </h2>
        <h3 className="font-bold text-lg sm:text-xl mt-4">Master Plan</h3>
        <div className="flex justify-center mt-4">
          <img
            src="anandas_masterplan.webp"
            alt="Master Plan"
            className="border w-full sm:w-1/2 lg:w-1/3"
          />
        </div>
        <h3 className="font-bold text-lg sm:text-xl mt-4">Floor Plan</h3>
        <div className="flex flex-col items-center mt-4">
          <img
            src="2bhk_1092_1.webp"
            alt="2 BHK Floor Plan"
            className="border w-full sm:w-1/2 lg:w-1/3 mb-4"
          />
          <button className="flex justify-center p-2 text-white bg-green-800 w-full sm:w-1/2 lg:w-1/3 font-bold text-base sm:text-lg lg:text-xl">
            2 BHK - 1092 Sq.ft
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
