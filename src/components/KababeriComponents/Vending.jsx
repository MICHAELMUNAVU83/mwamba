import React, { useState } from "react";
import kababerivending from "../images/kababeri/kababerivending.png";

const Vending = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div  id="kababerivending" className="flex bg-white flex-col-reverse md:flex-row  justify-between items-center">
      <div className="md:w-[48%] p-4 flex flex-col gap-4 justify-center items-start ">
        <div className="flex flex-col justify-center items-start">
          <p className="text-3xl poppins-regular font-bold">
            Interested in Vending and Branding Opportunities at The Event?
          </p>
          <p className="text-xl font-semibold">Fill the Form Below</p>
        </div>
        <div className="flex w-[100%] justify-between items-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-[48%] h-[50px] text-white focus:outline-none bg-[#1F2024] rounded-lg px-4"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-[48%] h-[50px] text-white focus:outline-none bg-[#1F2024] rounded-lg px-4"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex w-[100%] text-white focus:outline-none justify-between items-center">
          <input
            type="text"
            placeholder="Email"
            className="w-[100%] h-[50px] text-white focus:outline-none bg-[#1F2024] rounded-lg px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex w-[100%] justify-between items-center">
          <textarea
            placeholder="Your message here "
            className="w-[100%]   text-white focus:outline-none bg-[#1F2024] rounded-lg p-4"
            rows="10 "
            cols="20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="w-[100%] poppins-bold h-[50px] hover:scale-105 cursor-pointer font-extrabold transition-all duration-500 ease-in-out uppercase bg-white  shadow-2xl shadow-gray-400 rounded-lg px-4 ">
          Make Inquiry
        </button>
      </div>
      <div className="md:w-[48%] flex flex-col justify-center items-center">
        <img
          src={kababerivending}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
        <p className="md:text-7xl py-4 text-5xl  poppins-bold font-bold">Opportunities </p>
      </div>
    </div>
  );
};

export default Vending;
