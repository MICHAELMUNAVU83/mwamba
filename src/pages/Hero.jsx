import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../components/images/hero/slide1.png";
import slide2 from "../components/images/hero/slide2.png";
import slide3 from "../components/images/hero/slide3.png";
import slide4 from "../components/images/hero/slide4.png";
import slide5 from "../components/images/hero/slide5.png";
import slide6 from "../components/images/hero/slide6.png";
import slide7 from "../components/images/hero/slide7.png";
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },
    {
      id: 2,
      image: slide2,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },
    {
      id: 3,
      image: slide3,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },
    {
      id: 5,
      image: slide7,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },
    {
      id: 4,
      image: slide4,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },

    {
      id: 6,
      image: slide5,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },

    {
      id: 7,
      image: slide6,
      text1: "Mwamba Rugby",
      text2: "Football Club",
    },
  ];
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      id="home"
      className="flex justify-center  h-[100vh]  items-center swiper-container"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{ backgroundImage: `url(${slide.image})` }}
          className="bg-cover cursor-pointer bg-no-repeat h-[100vh]  bg-center w-full "
        >
          <div className="  h-full bg-black/40">
            <div className="flex flex-col items-start p-12 text-white justify-center h-[100vh]">
              <h1 className="text-[80px] font-bold">{slide.text1} </h1>
              <h1 className="text-[60px] font-bold">{slide.text2}</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
