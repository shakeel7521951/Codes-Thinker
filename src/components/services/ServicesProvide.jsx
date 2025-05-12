import React from "react";
import { useNavigate } from "react-router-dom";
import services from "./servicesData";
// const ServiceData = [
//   {
//     id: 1,
//     img: "/services/web.jpg",
//     title: "Web Development",
//     desc: "This generator uses a dictionary of Latin words to construct",
//     aos:'fade-right',duration:"1000"
//   },
//   {
//     id: 2,
//     img: "/services/app.jpg",
//     title: "App Development",
//     desc: "This generator uses a dictionary of Latin words to construct",
//     aos:'zoom-in',duration:"2000"
//   },
//   {
//     id: 3,
//     img: "/services/uiux.jpg",
//     title: "UI/UX Design",
//     desc: "This generator uses a dictionary of Latin words to construct",
//     aos:'fade-left',duration:"3000"
//   },
//   {
//     id: 4,
//     img: "/services/digital.jpg",
//     title: "Digital Marketing",
//     desc: "This generator uses a dictionary of Latin words to construct",
//     aos:'fade-right',duration:"4000"
//   },
//   {
//     id: 5,
//     img: "/services/seo.jpg",
//     title: "SEO and Database",
//     desc: "This generator uses a dictionary of Latin words to construct",
//     aos:'zoom-out',duration:"5000"
//   },
//   {
//     id: 6,
//     img: "/services/graphic.jpg",
//     title: "Graphic Design",
//     aos:'fade-left',duration:"6000",
//     desc: "This generator uses a dictionary of Latin words to construct",
//   },
// ];

const ServicesProvide = () => {
  const navigate = useNavigate();

  const handleReadMore = (item) => {
    navigate(`/servicedetail/${item.id}`);
  };

  return (
    <div className="  w-full mx-auto py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Latest <span className="text-[#0F00AA]">Services</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {services.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl border-t-4 border-b-4 border-t-[#0F00AA] border-b-[#0F00AA] overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
            data-aos={item.aos}
            data-aos-duration={item.duration}
          >
            <div className="shine-wrapper">
              <img
                className="w-full h-52 object-cover"
                src={item.img}
                alt={item.title}
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleReadMore(item)}
                  aria-label="Learn More"
                  className="mt-2 px-8 py-3 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shine animation CSS */}
      <style>{`
        .shine-wrapper {
          position: relative;
          overflow: hidden;
        }

        .shine-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .shine-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
        }

        .group:hover .shine-wrapper::after {
          animation: shine-move 1s ease-in-out;
        }

        @keyframes shine-move {
          100% {
            left: 125%;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesProvide;
