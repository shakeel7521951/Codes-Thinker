import React from "react";
// import Features from "./Features";

const Header = () => {
  return (
    <header className="bg-white text-black mb-[-80px]">
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Elevating
            <br />
            <span className="text-[#0F00A6]">
              Brands
            </span>
            <br />
            through Digital Innovation
          </h1>
          <p className="text-lg leading-relaxed text-black">
            Code's Thinker empowers startups to stand out and thrive with a full
            suite of digital services. Whether you're exploring crypto,
            enhancing marketing, building applications, or crafting captivating
            videos — our team drives your vision forward. Experience the power
            of a partnership that builds brands people remember.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              aria-label="Get Started"
              className="mt-2 px-8 py-3 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
            >
              Get Started
            </button>
            <button
              aria-label="View Portfolio"
              className="mt-2 px-9 py-3 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[linear-gradient(to_right,#FFF200,#e1c700,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 hover:scale-105"
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-96 bg-white/10 rounded-xl shadow-inner flex items-center justify-center text-white text-xl backdrop-blur-md border border-white/20">
            {/* You can place a Lottie animation, SVG, or image here */}
            Image / Graphic
            <img src="" />
          </div>
        </div>
      </div>
      {/* <Features /> */}
    </header>
  );
};

export default Header;
