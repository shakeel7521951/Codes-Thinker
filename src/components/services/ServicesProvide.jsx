import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceData = [
  {
    id: 1,
    img: "/services/web.jpg",
    title: "Web Development",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 2,
    img: "/services/app.jpg",
    title: "App Development",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 3,
    img: "/services/uiux.jpg",
    title: "UI/UX Design",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 4,
    img: "/services/digital.jpg",
    title: "Digital Marketing",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 5,
    img: "/services/seo.jpg",
    title: "SEO and Database",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
  {
    id: 6,
    img: "/services/graphic.jpg",
    title: "Graphic Design",
    desc: "This generator uses a dictionary of Latin words to construct",
  },
];

const ServicesProvide = () => {
  const navigate = useNavigate();

  const handleReadMore = (item) => {
    navigate(`/servicedetail/${item.id}`);
  };

  return (
    <div className="w-[90vw] max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18c8ff] to-[#c608ff]">
            Services
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl border-t-4 border-b-4 border-t-[#18c8ff] border-b-[#c608ff] overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
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
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleReadMore(item)}
                  aria-label="Learn More"
                  className="mt-2 w-full sm:w-auto px-6 sm:px-10 lg:px-16 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold text-white rounded shadow-lg bg-[linear-gradient(to_right,#18c8ff,#c608ff,#18c8ff)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 cursor-pointer"
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
