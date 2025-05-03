import React from "react";
import {
  FaNetworkWired,
  FaHandshake,
  FaLock,
  FaRocket,
  FaExchangeAlt,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  { icon: <FaNetworkWired />, label: "Blockchain Expertise", position: "lg:ms-[-200px]" },
  { icon: <FaHandshake />, label: "Small Business Support", position: "lg:ms-[-120px]" },
  { icon: <FaLock />, label: "Crypto Solutions", position: "lg:ms-[-60px]" },
  { icon: <FaRocket />, label: "Startup Business", position: "lg:ms-[-60px]" },
  { icon: <FaExchangeAlt />, label: "B2B Integration", position: "lg:ms-[-120px]" },
  { icon: <FaLightbulb />, label: "Fintech Innovation", position: "lg:ms-[-200px]" },
];

const KeyFeatures = () => {
  return (
    <div className="flex flex-col  mx-auto sm:w-7/12 lg:flex-row items-center justify-center md:gap-16 lg:gap-32 bg-gray-100 text-white py-16 px-6">
      
      {/* Circle Title */}
      <div className="flex items-center justify-center mb-10 lg:mb-0">
        <div className="w-60 border border-[#251d23] transition-all ease-in delay-100 hover:bg-gradient-to-br  from-[#0F00AA] to-[#060044] h-60 md:w-72 md:h-72 rounded-full flex items-center justify-center  hover:to-[#060044] group  shadow-2xl">
          <h1 className="text-2xl text-black md:text-3xl group-hover:text-white font-bold text-center leading-tight tracking-wide">
            KEY<br />FEATURES
          </h1>
        </div>
      </div>

      {/* Feature List */}
      <div className="flex w-full  flex-col items-center lg:items-start gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex h-13 justify-center items-center gap-4 px-4   w-full sm:w-[340px] md:w-[340px]  rounded-full border border-[#251d23] shadow-md shadow-black group hover:bg-gradient-to-br  from-[#0F00AA] to-[#060044]  cursor-pointer relative delay-100 hover:shadow-lg transition-all duration-300 ${feature.position}`}
          >
            <div className=" h-[100%] absolute left-0 border-r-2 border-0 top-0  w-[15%] flex items-center justify-center rounded-full transition-all  border-black delay-100 ease-in-out group-hover:border-r-2 group-hover:bg-black  group-hover:border-white group-hover:text-white  text-black text-xl shadow-md">
              {feature.icon}
            </div>
            <span className="text-black transition-all delay-100 ease-in-out group-hover:text-white font-semibold text-base tracking-wide">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
