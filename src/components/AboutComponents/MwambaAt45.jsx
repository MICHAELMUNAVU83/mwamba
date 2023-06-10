import React from "react";
import mwambaat45 from "../images/about/mwambaat45.png";

const MwambaAt45 = () => {
  return (
    <div
      id="mwambaat45"
      className="bg-[#1F2024] text-white text-2xl font-bold "
    >
      <div className="flex  gap-12  items-center">
        <div className="flex w-[50%]  flex-col  items-center ">
          <img
            src={mwambaat45}
            alt=""
            className="w-[100%] h-[80vh] object-cover"
          />
          <p className="h-[17vh] poppins-bold  text-7xl flex justify-center items-center  ">
            Mwamba at 45
          </p>
        </div>
        <div className="w-[45%] poppins-regular">
          <p>
            Click here to Pre-order the up coming limited edition Mwamba 45th
            anniversary coffee table book. The book is only{" "}
            <span className="font-bold poppins-bold"> KSh 2,500</span> and will
            have a limited print run, so
            <a className="font-bold cursor-pointer poppins-bold mx-2">
              order your copy today!
            </a>
          </p>
          <button className="w-[100%] my-8 poppins-bold  text-[#1F2024] h-[50px] hover:scale-105 cursor-pointer font-extrabold transition-all duration-500 ease-in-out uppercase bg-white  shadow-2xl shadow-gray-400 rounded-lg px-4 ">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MwambaAt45;
