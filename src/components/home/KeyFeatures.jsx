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
    <div className="flex flex-col lg:flex-row items-center justify-center md:gap-16 lg:gap-32 bg-gray-100 text-white py-16 px-6">
      
      {/* Circle Title */}
      <div className="flex items-center justify-center mb-10 lg:mb-0">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full flex items-center justify-center bg-gradient-to-br from-[#b35feb] to-[#4B8FFF] shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight tracking-wide">
            KEY<br />FEATURES
          </h1>
        </div>
      </div>

      {/* Feature List */}
      <div className="flex flex-col items-center lg:items-start gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 px-4 py-3 w-full sm:w-[350px] md:w-[400px] bg-gradient-to-br from-[#091458] to-[#0D5996] rounded-full border border-purple-600 hover:shadow-lg transition-all duration-300 ${feature.position}`}
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-[#9836FB] to-[#3B9FFC] text-white text-xl shadow-md">
              {feature.icon}
            </div>
            <span className="text-white font-semibold text-base tracking-wide">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
