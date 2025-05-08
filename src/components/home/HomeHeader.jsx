import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="w-full md:h-[85vh] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center px-6">
                <div className="text-white text-center max-w-4xl px-4 transform transition-all duration-500 hover:scale-[1.01]">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      {slide.highlight}
                    </span>
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                      View Our Work
                    </button>
                    <button className="px-8 py-3 text-lg font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next !text-white !right-8 after:!text-2xl after:!font-bold hover:after:!text-3xl hover:after:!drop-shadow-lg !transition-all !duration-300" />
        <div className="swiper-button-prev !text-white !left-8 after:!text-2xl after:!font-bold hover:after:!text-3xl hover:after:!drop-shadow-lg !transition-all !duration-300" />
      </Swiper>
    </div>
  );
};

export default HomeHeader;
