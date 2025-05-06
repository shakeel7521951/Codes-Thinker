import AOS from "aos";
import "aos/dist/aos.css";
import  { useEffect } from "react";
const HomeAbout = () => {
    const aboutFeatures = [
      { text: "Industry Expert Staff",aos:"fade-right" },
      { text: "Client-Centric Focus" ,aos:"fade-left" },
      { text: "Partner rather than Vendor" ,aos:"fade-up-right" },
      { text: "Solutions Geared to Improve Productivity" ,aos:"fade-up-left" },
      { text: "Collaborative Approach Throughout the Process",aos:"fade-up-right" },
    ];
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true,     // whether animation should happen only once
      });
    }, []);
  
    return (
      <div className="bg-white pt-10 pb-10 px-5 text-black overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2" data-aos="fade-up-right">
            <img
              src="./home/aboutUsHero.png"
              alt="About Code's Thinker"
              loading="lazy"
              className="md:min-h-[450px]"
            />
          </div>
          <div className="w-full md:w-1/2 mt-2" data-aos="fade-up-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              About{" "}
              <span className="text-[#0F00AA]">
                Code's{" "}
              </span>
              Thinker
            </h1>
            <p className="py-3 text-black">
              We redefine excellence in business solution at Code's Thinker. Our
              unique services in marketing, branding, management, design,
              development, and listing enables us to support industries & companies in the
              blockchain, fintech, edtech, cryptocurrency, small company, and B2B
              sectors. Discover success, efficiency, and innovation with TOJO
              Global—where your goals become our mission. Welcome to a new era of
              business transformation.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              {aboutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className=" group cursor-pointer rounded-full w-fit shadow-lg px-4 pe-6 py-1 flex items-center" data-aos={ `${feature.aos}`}
                >
                  <span className="w-[15px] transition-all ease-in delay-100 transform group-hover:translate-y-1/6 h-[15px] mr-4 rounded-full bg-[linear-gradient(142deg,#18c8ff,#c608ff)]"></span>
                  <p className="text-md text-black transition-all ease-in delay-100 transform group-hover:-translate-y-1/6">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeAbout;
  