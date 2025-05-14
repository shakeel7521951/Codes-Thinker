import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Welcome to",
    highlight: "Codes Thinker",
    description:
      "We craft smart, user-friendly digital solutions that help businesses innovate and grow.",
    image: "/home/header1.png",
  },
  {
    title: "Transform Ideas Into",
    highlight: "Digital Reality",
    description:
      "Our team blends creative design and clean code to deliver impactful digital experiences.",
    image: "/home/header1.png",
  },
  {
    title: "Your Vision,",
    highlight: "Our Expertise",
    description:
      "Partner with us to build scalable, modern websites that bring your vision to life.",
    image: "/home/header1.png",
  },
];

const HomeHeader = () => {
  return (
    <div className="w-full h-[85vh] max-h-[500px] relative">
      <Swiper
        modules={[Autoplay, Pagination]} // Removed Navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-1",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-white !w-6 !transition-all !duration-300",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }} // fixed string interpolation
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center px-6">
                <div className="text-white text-center max-w-4xl px-4 transform transition-all duration-500 hover:scale-[1.01]">
                  <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
                    {slide.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      {slide.highlight}
                    </span>
                  </h2>
                  <p className="text-sx md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <button className="px-3 py-2 md:px-6 md:py-3 text-sx font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 cursor-pointer">
                      View Our Work
                    </button>
                    <button className="px-3 py-2 md:px-6 md:py-3 text-sx font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 cursor-pointer">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeader;
