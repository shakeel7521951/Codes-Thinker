import React from "react";

const Features = () => {
  const features = [
    {
      image: "./home/homePageHeroCardSvg01.svg",
      title: "Comprehensive Digital Solutions",
    },
    {
      image: "./home/homePageHeroCardSvg02.svg",
      title: "Industry Expert Team",
    },
    {
      image: "./home/homePageHeroCardSvg03.svg",
      title: "Client-Centric Focus",
    },
    {
      image: "./home/homePageHeroCardSvg05.svg",
      title: "Reliable & Timely Delivery",
    },
    {
      image: "./home/homePageHeroCardSvg06.svg",
      title: "Affordable Pricing",
    },
  ];

  return (
    <div className="mx-auto flex flex-wrap justify-center gap-6 mt-14">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-1/6 min-w-[160px] p-6 rounded-2xl flex flex-col items-center text-center justify-center bg-[linear-gradient(45deg,#C608FF,#1862A3)] shadow-lg hover:shadow-[0_10px_25px_rgba(24,200,255,0.3)] transition-all duration-300 group cursor-pointer hover:bg-[linear-gradient(45deg,black,#1862A3)]"
        >
          <img
            src={feature.image}
            alt={feature.title}
            loading="lazy"
            className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-bold text-white text-sm sm:text-base leading-snug">
            {feature.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
