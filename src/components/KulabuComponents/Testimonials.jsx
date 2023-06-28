import React from "react";
import testimonialpic from "../images/kababeri/testimonialpic.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import kulabutestimonial from "../images/kulabu/kulabutestimonial.png";

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
      name: "Kigara Kamweru",
      profile: testimonialpic,
      position: "Professor, University of Nairobi.",
      testimonial:
        " Even though I did not play rugby, I have identified with the Mwamba club ever since I was a student at the University of Nairobi in the late seventies and early eighties. Mwamba gave us a  reason to be proud as conscientious and politically aware young Kenyans.",
    },
    {
      id: 2,
      name: "Kigara Kamweru",
      profile: testimonialpic,
      position: "Professor, University of Nairobi.",
      testimonial:
        " Even though I did not play rugby, I have identified with the Mwamba club ever since I was a student at the University of Nairobi in the late seventies and early eighties. Mwamba gave us a  reason to be proud as conscientious and politically aware young Kenyans.",
    },
    {
      id: 3,
      name: "Kigara Kamweru",
      profile: testimonialpic,
      position: "Professor, University of Nairobi.",
      testimonial:
        " Even though I did not play rugby, I have identified with the Mwamba club ever since I was a student at the University of Nairobi in the late seventies and early eighties. Mwamba gave us a  reason to be proud as conscientious and politically aware young Kenyans.",
    },
  ];
  return (
    <div
      id="membertestimonials"
      className="flex flex-col md:flex-row justify-between  bg-[#1F2024] text-white"
    >
      <div className="md:w-[48%] flex flex-col justify-center items-center">
        <img
          src={kulabutestimonial}
          alt=""
          className="w-[100%] h-[80vh] object-cover bg-cover bg-center bg-no-repeat"
        />
        <p className="md:text-7xl text-5xl py-8 font-bold">Testimonials</p>
      </div>

      <div className="md:w-[48%] w-[100%] py-4 md:py-0  flex  justify-center items-center">
        <div className="w-[94%] ">
          <Swiper className="swiper-container w-[100%]  mx-auto " loop={true}>
            {slides.map((slide) => (
              <SwiperSlide className="flex cursor-pointer mx-2 justify-center items-center ">
                <div className="flex flex-col justify-start">
                  <div className="flex items-center justify-start gap-4">
                    <img
                      src={slide.profile}
                      alt=""
                      className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] object-cover rounded-full"
                    />
                    <div className="flex flex-col justify-center items-start">
                      <p className="md:text-2xl text-xl font-bold">{slide.name}</p>
                      <p className="md:text-xl font-bold">{slide.position}</p>
                    </div>
                  </div>
                  <p className="w-[80%] text-sm">{slide.testimonial}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          className="w-[6%] cursor-pointer bg-white text-[#1F2024] h-[200px] md:h-[100%] flex items-center"
          onClick={swipe}
        >
          <MdOutlineArrowForwardIos className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
