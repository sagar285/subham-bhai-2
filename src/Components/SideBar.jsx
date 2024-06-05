import React from "react";
import { FaPhone } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className="justify-between fixed right-0 top-0 h-full bg-white px-4 hidden md:block">
      <div className="w-full bg-gray-200 outline-none">
        <div className="flex flex-row ml-2 ">
          <button className="flex flex-row bg-black mr-1 px-2 items-center text-white justify-center rounded-bl-xl">
            Pre Register
          </button>
          <button className="flex flex-row bg-black p-2 justify-center text-white items-center rounded-br-xl">
            <FaPhone />
            +912248965252
          </button>
        </div>
        <div className="flex justify-center">
          <button className="flex flex-row justify-center items-center py-2 px-4 mt-2 text-white bg-green-900 rounded-md mb-2">
            <FaPhone />
            <span>Instant Call Back</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full mt-4 bg-white justify-center">
        <h2 className="w-800 mx-auto border-l font-bold text-xl">
          Get The Best Quote
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="mt-6 border-b-2 outline-none"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="mt-6 border-b-2 outline-none"
          autoComplete="off"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="mt-6 border-b-2 outline-none"
          autoComplete="off"
        />
        <button className="bg-green-800 rounded text-white py-2 mt-6 w-40 mx-auto">
          Get It Now
        </button>
      </div>
    </div>
  );
};

export default SideBar;
