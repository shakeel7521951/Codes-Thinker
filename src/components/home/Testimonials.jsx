import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager, TechNova",
      message:
        "This team exceeded our expectations. The project was delivered ahead of schedule and the quality was outstanding.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Thompson",
      role: "CEO, BrightFuture Inc.",
      message:
        "Incredible service and attention to detail. I highly recommend them to anyone looking for a dedicated partner.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartSmart",
      message:
        "Their professionalism and skill are top-notch. They brought our vision to life better than we imagined.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  const [FormReview,setFormReview] =useState(false);
  const handleAddReview = () => {
    setFormReview(true)
    
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (

    <div className="sm:py-10 px-4 relative">
      <ReviewForm className={`${FormReview ? "block" : "hidden"}`} setFormReview={setFormReview} />
      <div className="w-full max-w-5xl mx-auto bg-[linear-gradient(45deg,#0F00AA,#060044)] p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
        {/* Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left"  data-aos="fade-down">
          <h1 className="text-3xl font-bold text-white leading-snug">
            Our{" "}
            <span className="text-[#FFF200]">
              Clients,
            </span>{" "}
            In Their Own Words
          </h1>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full md:w-2/3" data-aos="zoom-in">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="rounded-lg overflow-hidden w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="text-white w-full rounded-lg shadow-md p-6 space-y-4">
                  <div className="flex justify-start gap-6 items-center">
                    <h1 className="text-md sm:text-xl font-bold">5.0</h1>
                    <div className="flex text-yellow-400 text-md sm:text-xl ml-2 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="">
                    <div className="flex justify-start gap-5 items-center">
                      <img
                        src={item.avatar}
                        className="rounded-full h-20 w-20"
                        alt={item.name}
                      />
                      <div className="">
                        <h1 className="sm:text-lg font-semibold">{item.name}</h1>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm">{item.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center sm:justify-end p-1">
            <button data-aos="zoom-out"
              onClick={handleAddReview}
              className="px-2 py-2 text-xs sm:px-3 sm:py-2 cursor-pointer text-black hover:text-white sm:text-lg font-semibold rounded text-md shadow-lg bg-[linear-gradient(to_right,#FFF200,#e1c700,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 hover:scale-105"
              title="Click to add your review"
            >
              Add your reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
