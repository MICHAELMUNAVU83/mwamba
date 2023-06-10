import React from "react";
import kababerihistory from "../images/kababeri/kababerihistory.png";

const History = () => {
  return (
    <div id="kababerihistory" className="flex justify-between items-center">
      <div className="w-[50%] flex justify-center items-center">
        <p className="w-[610px] mx-auto">
          The George Mwangi Kabeberi Memorial Sevens, popularly known as the
          Kabeberi Sevens, was first played in 1986 to commemorate the passing
          away of the charismatic George Mwangi Kabeberi, one of the founding
          members of the Mwamba club. Over the years, the significance of the
          tournament has been expanded to honour departed club members,
          including recently departed Leeroy Okara, Absalom “Bimbo” Mutere,
          Abedeen Shikoyi, and Jimmy Owino and lately Victor Wayodi among
          others. The 2019 edition of the Kabeberi Sevens is scheduled to be
          played on July 26-29 at Kinoru Stadium, Meru.
        </p>
      </div>

      <div className="w-[545px] flex flex-col justify-center items-center">
        <img
          src={kababerihistory}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
        <p className="text-7xl py-4 font-bold">History</p>
      </div>
    </div>
  );
};

export default History;
