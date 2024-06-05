import React from "react";
import { FaCheck } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-4 text-sm mt-2">
            <FaCheck />
            <span>
              Project Registered under Government of India RERA Act 2016
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 text-sm mt-2">
            <FaCheck />
            <span>
              Government RERA Authorised Advertiser’s: Home Bazaar Services Pvt
              Ltd, Registration No PRM/KA/RERA/1251/446/AG/220113/002717, CIN
              U45400MH2013PTC242930.
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 text-sm mt-2">
            <FaCheck />
            <span>
              RERA Project Registration No.: PRM/KA/RERA/1251/309/PR/210331/004084
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 text-sm mt-2">
            <FaCheck />
            <span>
              <b>Site Address:</b> Godrej Ananda: Gummanahalli, Bengaluru,
              Karnataka 562149
            </span>
          </div>
          <div className="flex flex-row items-center gap-4 text-sm mt-2">
            <FaCheck />
            <span>
              <b>Contact Us:</b> Corporate Office: Godrej Properties: Unit No. 5C,
              5th Floor, Godrej One, Pirojshanagar, Vikhroli East, Mumbai - 400
              079
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-6 text-center">
          <div className="logo-footer w-[20%] mx-auto">
            <img src="a_logo9.svg" alt="" className="w-full" />
          </div>
        </div>
        <p className="text-sm mt-4">
          <b>Disclaimer:</b> The content provided on this website is for
          information purposes only and does not constitute an offer to avail
          any service. The prices mentioned are subject to change without prior
          notice, and the availability of properties mentioned is not
          guaranteed. The images displayed on the website are for representation
          purposes only and may not reflect the actual properties accurately.
          Please note that this is the official website of an authorized
          marketing partner. We may share data with Real Estate Regulatory
          Authority (RERA) registered brokers/companies for further processing
          as required. We may also send updates and information to the mobile
          number or email ID registered with us. All rights reserved. The
          content, design, and information on this website are protected by
          copyright and other intellectual property rights. Any unauthorized use
          or reproduction of the content may violate applicable laws. For
          accurate and up-to-date information regarding services, pricing,
          availability, and any other details, it is advisable to contact us
          directly through the provided contact information on this website.
          Thank you for visiting our website.
        </p>
      </div>
    </div>
  );
};

export default Footer;
