import React from "react";

import contactspic from "../images/contacts/contactspic.png";
import contactsbg from "../images/contacts/contactsbg.png";

const ContactHome = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${contactsbg})`,
      }}
    >
      <div className="h-[100vh] bg-[#1F2024]/50 ">
        <div className="w-[40%] flex items-center h-[80vh]">
          <div
            style={{
              backgroundImage: `url(${contactspic})`,
            }}
            className="w-[80%] h-[80vh] bg-cover bg-center bg-no-repeat"
          ></div>
        </div>
        <div className="flex poppins-bold h-[20vh] text-[100px] w-[100%] justify-start p-12 items-center text-white  font-bold">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
