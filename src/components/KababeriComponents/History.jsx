import React from "react";
import kababerihistory from "../images/kababeri/kababerihistory.png";

const History = () => {
  return (
    <div
      id="kababerihistory"
      className="flex justify-between md:flex-row flex-col-reverse items-center"
    >
      <div className="md:w-[50%] flex flex-col justify-center items-center">
        <p className="md:w-[610px] p-4 md:p-0 poppins-light mx-auto">
          The George Mwangi Kabeberi Memorial Sevens, popularly known as the
          Kabeberi Sevens, was first played in 1986 to commemorate the passing
          away of the charismatic George Mwangi Kabeberi, one of the founding
          members of the Mwamba club. Over the years, the significance of the
          tournament has been expanded to honour departed club members,
          including recently departed Leeroy Okara, Absalom “Bimbo” Mutere,
          Abedeen Shikoyi, and Jimmy Owino and lately Victor Wayodi among
          others.
        </p>

        <div className="flex flex-col my-4 justify-center items-center">
          <a
            href="https://apps.little.africa/events/2023-george-mwangi-kabeberi-sevens-"
            rel="noreferrer"
            target="_blank"
            className="w-[100%] px-8 py-4 poppins-bold h-[50px] hover:scale-105 cursor-pointer font-extrabold transition-all duration-500 ease-in-out uppercase text-white bg-[#1F2024]  shadow-2xl shadow-gray-400 rounded-lg  "
          >
            Buy Tickets
          </a>
        </div>
      </div>

      <div className="md:w-[50%] w-[100%] flex flex-col justify-center items-center">
        <p className="text-7xl py-4  poppins-bold font-bold">History</p>
        <img
          src={kababerihistory}
          alt=""
          className="w-[100%] object-cover h-[664px] "
        />
      </div>
    </div>
  );
};

export default History;
