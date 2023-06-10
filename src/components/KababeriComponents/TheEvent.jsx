import React from "react";
import kababerievent from "../images/kababeri/kababerievent.png";

const TheEvent = () => {
  return (
    <div
      id="kababeritheevent"
      className="flex bg-[#1E1E1E] text-white justify-between items-center"
    >
      <div className="w-[50%] flex flex-col justify-center items-center">
        <img
          src={kababerievent}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
        <p className="text-7xl py-4 font-bold">The Event</p>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <p className="w-[610px] mx-auto">
          The Kabeberi Sevens is played as part of the Kenya National Sevens
          Series, and is one of only two events of that series to be played in
          Nairobi. For this reason, the Kabeberi Sevens has traditionally been
          the best-attended tournament in the series, with many Nairobi
          residents coming to the Kabeberi to watch Kenya’s world-famous Rugby
          Sevens stars whom they only see on television the rest of the year.
          Due to this, the numbers attending the Kabeberi Sevens have increased
          steadily over the years with the 2022 event attracting over 10,000
          spectators throughout the weekend. The 2023 edition of the Kabeberi
          Sevens is scheduled to be played on August 19th and 20th at the RFUEA
          Grounds, Nairobi.
        </p>
      </div>
    </div>
  );
};

export default TheEvent;
