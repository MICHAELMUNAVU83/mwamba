import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../components/images/slide1.png";
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
    },
    {
      id: 2,
      image: slide1,
    },
  ];
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
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
          className="bg-cover bg-no-repeat h-[100vh]  bg-center w-full "
        >
          <div className="flex flex-col items-start p-12 text-white justify-center h-[100vh]">
            <h1 className="text-[120px] font-bold">Mwamba Rugby</h1>
            <h1 className="text-7xl font-bold">Football Club</h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
