import React from "react";
import kababerievent from "../images/kababeri/kababerievent.png";

const TheEvent = () => {
  return (
    <div
      id="kababeritheevent"
      className="flex bg-[#1E1E1E] text-white md:flex-row flex-col justify-between items-center"
    >
      <div className="md:w-[50%] flex flex-col justify-center items-center">
        <img
          src={kababerievent}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
        <p className="text-7xl py-4 poppins-bold font-bold">The Event</p>
      </div>
      <div className="md:w-[50%] flex justify-center items-center">
        <p className="md:w-[610px] p-4 md:p-0 poppins-light mx-auto">
          The Kabeberi Sevens is played as part of the Kenya National Sevens
          Series, and is one of only two events of that series to be played in
          Nairobi. For this reason, the Kabeberi Sevens has traditionally been
          the best-attended tournament in the series, with many Nairobi
          residents coming to the Kabeberi to watch Kenya’s world-famous Rugby
          Sevens stars whom they only see on television the rest of the year.
          Due to this, the numbers attending the Kabeberi Sevens have increased
          steadily over the years with the 2022 event attracting over 10,000
          spectators throughout the weekend. The 2023 edition of the Kabeberi
          Sevens is scheduled to be played on September  9th and 10th at the RFUEA
          Grounds, Nairobi.
        </p>
      </div>
    </div>
  );
};

export default TheEvent;
