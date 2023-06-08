import React from "react";
import aboutpic from "../images/about/aboutpic.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Testimonials = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };
  const slides = [
    {
      id: 1,
      name: "Peter Kamau",
      profile: aboutpic,
      position: "Chairman",
      testimonial:
        "I've been a member of the rugby club for three years, and it's been an incredible journey. The sense of community and belonging is remarkable. From the best seats at thrilling matches to unforgettable encounters with favorite players, the membership offers incredible experiences. Priority ticket purchasing, discounted merchandise, and regular newsletters keep me connected. Joining the club means being part of a passionate community, forging friendships, and creating lasting memories. Experience the true spirit of rugby as a member of our incredible club!",
    },
    {
      id: 2,
      name: "Peter Kamau",
      profile: aboutpic,
      position: "Chairman",
      testimonial:
        "I've been a member of the rugby club for three years, and it's been an incredible journey. The sense of community and belonging is remarkable. From the best seats at thrilling matches to unforgettable encounters with favorite players, the membership offers incredible experiences. Priority ticket purchasing, discounted merchandise, and regular newsletters keep me connected. Joining the club means being part of a passionate community, forging friendships, and creating lasting memories. Experience the true spirit of rugby as a member of our incredible club!",
    },
    {
      id: 3,
      name: "Peter Kamau",
      profile: aboutpic,
      position: "Chairman",
      testimonial:
        "I've been a member of the rugby club for three years, and it's been an incredible journey. The sense of community and belonging is remarkable. From the best seats at thrilling matches to unforgettable encounters with favorite players, the membership offers incredible experiences. Priority ticket purchasing, discounted merchandise, and regular newsletters keep me connected. Joining the club means being part of a passionate community, forging friendships, and creating lasting memories. Experience the true spirit of rugby as a member of our incredible club!",
    },
  ];
  return (
    <div className="flex justify-between  bg-[#1F2024] text-white">
      <div className="w-[48%] flex flex-col justify-center items-center">
        <img
          src={aboutpic}
          alt=""
          className="w-[100%] h-[80vh] bg-cover bg-center bg-no-repeat"
        />
        <p className="text-7xl py-8 font-bold">Testimonials</p>
      </div>

      <div className="w-[48%] flex flex-col justify-center items-center">
        <Swiper className="swiper-container w-[100%] " loop={true}>
          {slides.map((slide) => (
            <SwiperSlide className="flex cursor-pointer justify-center items-center ">
              <div className="flex flex-col justify-start">
                <div className="flex items-center justify-start gap-4">
                  <img
                    src={slide.profile}
                    alt=""
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-2xl font-bold">{slide.name}</p>
                    <p className="text-xl font-bold">{slide.position}</p>
                  </div>
                </div>
                <p className="w-[440px]">{slide.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="w-[4%] cursor-pointer bg-white text-black flex flex-col justify-center items-center"
        onClick={swipe}
      >
        <MdOutlineArrowForwardIos className="text-2xl" />
      </div>
    </div>
  );
};

export default Testimonials;
