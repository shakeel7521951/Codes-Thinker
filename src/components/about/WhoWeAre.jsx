import React from "react";
import { IoArrowForward } from "react-icons/io5";
const WhoWeAre = () => {
  const aboutFeatures = [
    { text: "Industry Expert Staff", aos: "fade-right" },
    { text: "Client-Centric Focus", aos: "fade-left" },
    { text: "Partner rather than Vendor", aos: "fade-up-right" },
    { text: "Solutions Geared to Improve Productivity", aos: "fade-up-left" },
    { text: "Collaborative Approach Throughout the Process", aos: "fade-up-right" },
  ];
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
          <div className="w-full max-w-xl mx-auto relative " data-aos="fade-right">
            <img
              src="/about/img2.png"
              alt="career step"
              className="w-full h-auto rounded max-h-[23rem] object-contain"
            />
            <img
              src="/about/img.jpg"
              alt="career step"
              className="w-40 h-40 rounded absolute -bottom-20 right-0 object-contain"
            />
            <div className=" h-20 w-20 absolute flex justify-center items-center top-0  bg-white p-2 rounded-full">
              <img src="/about/mask.png" alt=""  className=" h-10 w-10" />
            </div>
          </div>

          <div className="px-2">
            <h2 className="text-md font-light mb-2 text-black">
              WHO{" "}
              <span className="text-[#0F00AA] font-bold">
                WE
              </span>{" "}
              ARE
            </h2>
            <h1 className="text-xl sm:text-4xl font-semibold mb-3 text-gray-900">
            YOUR <span className="text-[#0F00AA]">VISION OUR</span> CODE
            </h1>
            <p className="text-base sm:text-md mb-5 text-gray-900">
            At Codes Thinker, we are a passionate team of developers, designers, and strategists dedicated to building smart, scalable, and user-focused digital solutions. We thrive on creativity, and cutting-edge technology to transform ideas into impactful products. With a commitment to quality, transparency, and client satisfaction, we don't just deliver code — we deliver value. Every project we take on reflects our belief in innovation, precision, and long-term partnerships.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-full w-fit shadow-lg px-4 pe-6 py-1 flex items-center"
                  data-aos={feature.aos}
                >
                  <span className="w-[25px] h-[10px] flex justify-center mr-4 rounded ]"><IoArrowForward /></span>
                  <p className="text-md text-black">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
