import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  return (
    <div className="py-10 px-4">
      <div className="w-full max-w-5xl mx-auto bg-[linear-gradient(45deg,#0F00AA,#060044)] p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center">
        {/* Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white leading-snug">
            Our{" "}
            <span className="text-[#FFF200]">
              Clients,
            </span>{" "}
            In Their Own Words
          </h1>
        </div>

        {/* Testimonials Carousel */}
        <div className="w-full md:w-2/3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="rounded-lg overflow-hidden"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-white rounded-lg shadow-md p-6 text-center space-y-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                  />
                  <p className="italic">"{item.message}"</p>
                  <div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm mb-4">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
