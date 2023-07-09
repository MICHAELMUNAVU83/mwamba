import React from "react";
import aboutpic from "../images/about/aboutpic.png";

const ContactBenefits = () => {
  return (
    <div
      id="membershipbenefits"
      class="bg-white flex flex-col-reverse md:flex-row justify-between"
    >
      <div className="md:w-[50%] w-[100%] md:text-xl mx-auto uppercase flex flex-col justify-center items-center ">
        <form action="https://formspree.io/f/xdovezbq" method="POST">
          <h2 className="text-[black] mb-2">Name</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="bg-[#181822] text-[#fff]  w-full outline-none py-1 mb-10 px-4 rounded-md shadow-sm"
            required
          />

          <h2 className="text-[black] mb-2">Email</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="bg-[#181822] text-[#fff] w-full outline-none py-1 mb-10 px-4 rounded-md shadow-sm"
            required
            validate="email"
          />

          <h2 className="text-[black] mb-2">Message</h2>
          <textarea
            name="message"
            placeholder="Enter your message"
            id="message"
            cols="30"
            rows="10"
            className="bg-[#181822] text-[#fff] w-full  outline-none py-1 px-4 rounded-md shadow-sm"
            required
          ></textarea>

          <input
            type="submit"
            value="Let's get started"
            className="bg-[#fff] w-full text-[#000] shadow-xl shadow-black rounded-lg  outline-none py-6 mt-10 font-bold uppercase cursor-pointer"
          />
        </form>
      </div>

      <div class="md:w-[40%] w-[100%] flex flex-col justify-center items-center ">
        <img src={aboutpic} alt="" class="w-[100%] h-[80vh] object-cover" />
        <p className="text-7xl py-4 poppins-bold font-bold">Talk to Us</p>
      </div>
    </div>
  );
};

export default ContactBenefits;
