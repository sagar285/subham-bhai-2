import React from "react";

const About = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="bg-white p-6 ">
        <div className="w-20 mx-auto mb-4">
          <img src="a_logo9.svg" alt="" className="w-full" />
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row md:justify-between lg:justify-between lg:items-start items-center">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-0">About Godrej Properties</h1>
          <button className="bg-green-800 py-2 px-6 text-white rounded mt-4 md:mt-0">Chat with us</button>
        </div>
        <p className="mt-4 overflow-hidden">
          Founded in 1990, Godrej Properties is a leading real estate developer
          in India with a range of residential townships, business parks, and
          mixed-use properties as part of its portfolio. The firm's properties
          stand out for their lovely architecture, quality residences, tranquil
          lush environs, and use of cutting-edge technologies. With a grand
          legacy in the real estate industry, Godrej Properties has changed the
          skyline of many cities in the country.
        </p>

        <p className="mt-4 overflow-hidden">RERA No : PRM/KA/RERA/1251/309/PR/210331/004084</p>

        <p className="mt-4 overflow-hidden">
          According to the RERA Act 2016 of the Government of India, all
          projects of the Godrej Properties including the Godrej Ananda, are
          listed on the Karnataka Government's RERA website under registered
          projects.
        </p>
      </div>
    </div>
  );
};

export default About;
