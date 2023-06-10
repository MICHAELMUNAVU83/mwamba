import React from "react";
import homeabout from "../components/images/home/homeabout.png";
import homeat45 from "../components/images/home/homeat45.png";
import homeclubnews from "../components/images/home/homeclubnews.png";
import homekababeri from "../components/images/home/homekababeri.png";
import homeshop from "../components/images/home/homeshop.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div class="h-[100vh] flex justify-center">
      <div className="w-2/5 ">
        <div to="/about"
          className="h-[80vh] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${homeabout})` }}
        >
          <Link to ="/about" className="h-[80vh] flex items-end justify-end pb-12 ">
            <h1 className="bg-[#1F2024] bg-opacity-75 rounded-l-2xl  w-[210px] h-[80px] flex items-center justify-center text-white text-xl">
              About us
            </h1>
          </Link>
        </div>
        <Link to="/kulabu" className="h-[20vh] flex items-center justify-center  bg-[#1F2024] ">
          <h1 className="text-white text-7xl flex font-bold">
            Join The Kulabu{" "}
            <span>
              <IoIosArrowForward className="text-7xl" />
            </span>
          </h1>
        </Link>
      </div>
      <div className="w-3/5   flex flex-col ">
        <div className=" flex w-[100%] h-[50vh]">
          <div
            className="w-[60%] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${homeat45})` }}
          >
            <Link to="/team" className="h-[50vh] flex items-end justify-end pb-12 ">
              <h1 className="bg-[#1F2024] bg-opacity-75 rounded-l-2xl  w-[210px] h-[80px] flex items-center justify-center text-white text-xl">
                Team
              </h1>
            </Link>
          </div>
          <div
            className="w-[40%] bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${homekababeri})`,
            }}
          >
            <Link to="/kababeri" className="h-[50vh] flex items-end justify-end pb-12 ">
              <h1 className="bg-[#1F2024] bg-opacity-75 rounded-l-2xl  w-[210px] h-[80px] flex items-center justify-center text-white text-xl">
                Kabeberi Sevens
              </h1>
            </Link>
          </div>
        </div>
        <div className="bg-[#1F2024] flex w-[100%] h-[50vh]">
          <div
            className="w-[40%] bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${homeclubnews})`,
            }}
          >
            <Link to="/news" className="h-[50vh] flex items-end justify-end pb-12 ">
              <h1 className="bg-[#1F2024] bg-opacity-75 rounded-l-2xl  w-[210px] h-[80px] flex items-center justify-center text-white text-xl">
                Club News
              </h1>
            </Link>
          </div>
          <div
            className="w-[60%] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${homeshop})` }}
          >
            <div className="h-[50vh] flex items-end justify-end pb-12 ">
              <h1 className="bg-[#1F2024] bg-opacity-75 rounded-l-2xl  w-[315px] h-[80px] flex items-center justify-center text-white text-xl">
                Buy Mwamba Merchandise
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
