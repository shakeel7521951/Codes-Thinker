import { FaBootstrap, FaCode, FaFigma, FaPhp, FaReact, FaSearch, FaWordpress } from "react-icons/fa";
// import '../../../../Codes-Thinker/src/App.css';
import { MdJavascript } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
export default function MovingServices() {
  return (
    <div className=" relative w-full mt-10   h-[600px] flex items-center justify-center overflow-hidden">
      {/* Central Glowing Sun with text */}
      <div className="sun z-10 flex items-center justify-center">
        <span className="text-black font-bold text-xs">Thinker</span>
      </div>

      {/* Orbit Rings with Icons */}
      <Orbit radius="50px" duration="20s" icon={<FaCode className="text-black" />} label="Web" />
      <Orbit radius="140px" duration="40s" icon={<FaBootstrap   className=" text-black" />} label="SEO" />
      <Orbit radius="80px" duration="25s" icon={<RiTailwindCssFill className="text-black" />} label="App" />
      <Orbit radius="100px" duration="30s" icon={<MdJavascript  className="text-black" />} label="Marketing" />
      <Orbit radius="120px"  duration="35s" icon={<FaReact className="text-black hidd" />} label="SEO" />
      <Orbit radius="160px"  duration="45s" icon={<FaWordpress className="text-black hidd" />} label="SEO" />
      <Orbit radius="180px"  duration="50s" icon={<DiDjango  className="text-black hidd" />} label="SEO" />
      <Orbit radius="200px"  duration="55s" icon={<FaPhp className="text-black hidd" />} label="SEO" />
      <Orbit radius="220px"  duration="60s" icon={<FaFigma className="text-black hidd" />} label="SEO" />
    </div>
  );
}

function Orbit({ radius, duration, icon }) {
    return (
      <div
        className="orbit-ring absolute rounded-full border border-gray-500 opacity-80"
        style={{
          width: `calc(2 * ${radius})`,
          height: `calc(2 * ${radius})`,
          animation: `orbitAnimation ${duration} linear infinite`,
        }}
      >
        <div 
          className="orbit-object absolute top-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: radius,
            height: radius,
          }}
        >
          <div className="orbit-content rounded-full  shadow-lg flex items-center justify-center"
            style={{
              width:'20%',  
              height: '20%', 
            }}
          >
            <div className="orbit-icon text-3xl" >
              {icon}
            </div>
          </div>
        </div>
      </div>
    );
  }