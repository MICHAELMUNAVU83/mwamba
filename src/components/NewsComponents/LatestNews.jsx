import React from "react";
import latestnews from "../images/news/latestnews.png";
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
    <div
      id="latestnews"
      className="flex justify-between flex-col-reverse md:flex-row  "
    >
      <div className="md:w-[48%]  w-[100%] flex flex-row  justify-center items-center">
        <div
          className="w-[6%] px-4 cursor-pointer bg-[#1F2024] text-white flex flex-col md:h-[100%] h-[500px] justify-center items-center"
          onClick={swipe}
        >
          <MdOutlineArrowBackIosNew className="text-2xl" />
        </div>
        <div className="w-[94%] ">
          <p className="md:text-7xl text-5xl py-8 font-bold ml-5">
            Latest News
          </p>
          <Swiper className="swiper-container w-[100%] " loop={true}>
            {slides.map((slide) => (
              <SwiperSlide className="flex cursor-pointer py-8  justify-center items-center ">
                <div className="flex flex-col justify-start  px-8">
                  <p className="md:text-2xl font-bold poppins-bold w-[80%]">
                    {slide.title}
                  </p>
                  <p className="md:text-xl poppins-regular font-semibold">
                    Column by {slide.author}
                  </p>
                  <p className="md:w-[525px] poppins-light">{slide.excerpt}</p>
                  <button className="uppercase poppins-bold bg-white md:w-[525px] h-[57px] font-bold mt-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer shadow-md shadow-gray-500 rounded-lg ">
                    Read More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="md:w-[48%] flex flex-col justify-center items-center">
        <img
          src={latestnews}
          alt=""
          className="w-[100%] h-[80vh] object-cover bg-cover bg-center bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default LatestNews;
