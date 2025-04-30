import React from "react";

const HeroServices = () => {
  return (
    <header className="min-h-screen bg-white text-black mb-[-100px]">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            Perfect It <span className="text-transparent bg-clip-text bg-[linear-gradient(241deg,#18c8ff_14.59%,#c608ff_59.76%)]">
              Solutions
            </span> Business
          </h1>
          <p className="text-lg leading-relaxed text-black">
          Perfect IT Solutions provides expert services in software development, IT consulting, cloud solutions, network security, data management, technical support, web design, and system integration to empower business growth and efficiency.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              aria-label="Get Started"
              className="mt-2 px-8 py-3 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[linear-gradient(to_right,#18c8ff,#c608ff,#18c8ff)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
            >
              learn more 
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-96 bg-white/10 rounded-xl  flex items-center justify-center text-white text-xl backdrop-blur-md border border-white/20">
            {/* You can place a Lottie animation, SVG, or image here */}
            Image / Services
            <img src="/services/hero.png" />
          </div>
        </div>
      </div>
    
    </header>
  );
};

export default HeroServices;

