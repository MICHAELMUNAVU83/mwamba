import React from "react";
import aboutpic from "../images/about/aboutpic.png";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const LatestNews = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };
  const slides = [
    {
      id: 1,
      title: "MWAM-BUZZ : Mwamba Rugby Launches Monthly Newsletter",
      author: "Anonymous",
      excerpt:
        "Introducing Mwam-Buzz, the monthly newsletter that brings you all the exciting news and updates from Mwamba Rugby Club and the world of rugby! Download the first edition now and be prepared to dive into a world of thrilling updates and captivating stories.  With affordable advertising space, we want to support your commercial interests while keeping you informed about the latest happenings in the club. But that's not all! Mwam-Buzz also gives you a sneak peek into upcoming events and opportunities to contribute your creative writing skills.",
    },
    {
      id: 2,
      title: "MWAM-BUZZ : Mwamba Rugby Launches Monthly Newsletter",
      author: "Anonymous",
      excerpt:
        "Introducing Mwam-Buzz, the monthly newsletter that brings you all the exciting news and updates from Mwamba Rugby Club and the world of rugby! Download the first edition now and be prepared to dive into a world of thrilling updates and captivating stories.  With affordable advertising space, we want to support your commercial interests while keeping you informed about the latest happenings in the club. But that's not all! Mwam-Buzz also gives you a sneak peek into upcoming events and opportunities to contribute your creative writing skills.",
    },
  ];
  return (
    <div className="flex justify-between ">
      <div
        className="w-[4%] cursor-pointer bg-[#1F2024] text-white flex flex-col justify-center items-center"
        onClick={swipe}
      >
        <MdOutlineArrowBackIosNew className="text-2xl" />
      </div>
      <div className="w-[48%] flex flex-col justify-center items-center">
        <Swiper className="swiper-container w-[100%] " loop={true}>
          {slides.map((slide) => (
            <SwiperSlide className="flex cursor-pointer py-8 justify-center items-center ">
              <div className="flex flex-col justify-start  px-8">
                <p className="text-2xl font-bold w-[80%]">{slide.title}</p>
                <p className="text-xl font-semibold">Column by { " "}{slide.author}</p>
                <p className="w-[525px]">{slide.excerpt}</p>
                <button className="uppercase bg-white w-[525px] h-[57px] font-bold mt-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer shadow-md shadow-gray-500 rounded-lg ">
                  Read More
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[48%] flex flex-col justify-center items-center">
        <img
          src={aboutpic}
          alt=""
          className="w-[100%] h-[80vh] bg-cover bg-center bg-no-repeat"
        />
        <p className="text-7xl py-8 font-bold">Latest News</p>
      </div>
    </div>
  );
};

export default LatestNews;
