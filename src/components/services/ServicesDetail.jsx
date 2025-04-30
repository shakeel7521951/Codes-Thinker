import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaProjectDiagram,
    FaSearch,
    FaUsers,
    FaPenNib,
    FaBullseye,
    FaCertificate,
    FaMobileAlt,
    FaCode,
    FaShieldAlt,
    FaPaintBrush,
    FaLaptop,
    FaInstagram,
    FaVideo,
    FaVolumeUp,
    FaCloudUploadAlt,
    FaGamepad,
    FaCogs,
    FaGlobe
} from "react-icons/fa";

const services = [
    {
        id: "1",
        title: "Web Development",
        description:
            "Our Content Specialist services go beyond just writing. We work with you to develop a full-scale content strategy...",
        image: "/services/web.jpg",
        details: [
            {
                icon: <FaProjectDiagram className="text-3xl text-white mb-4" />,
                title: "Content Strategy",
                text: "We build a roadmap for your brand content based on trends, keywords, and audience behavior.",
            },
            {
                icon: <FaSearch className="text-3xl text-white mb-4" />,
                title: "SEO Optimization",
                text: "Every content piece is SEO-optimized to boost visibility and rank better.",
            },
            {
                icon: <FaUsers className="text-3xl text-white mb-4" />,
                title: "Audience Engagement",
                text: "We craft content that drives interaction, shares, and customer loyalty.",
            },
        ],
    },
    {
        id: "2",
        title: "App Development",
        description:
            "Quality content is the backbone of any digital presence. Our Content Writing services provide you with...",
        image: "/services/app.jpg",
        details: [
            {
                icon: <FaPenNib className="text-3xl text-white mb-4" />,
                title: "Professional Writing",
                text: "We create high-quality content tailored to your voice and audience.",
            },
            {
                icon: <FaBullseye className="text-3xl text-white mb-4" />,
                title: "Audience Focus",
                text: "Content is shaped around what matters most to your ideal customer.",
            },
            {
                icon: <FaCertificate className="text-3xl text-white mb-4" />,
                title: "SEO Best Practices",
                text: "We help your content rank by applying the latest SEO techniques.",
            },
        ],
    },
    {
        id: "3",
        title: "UI/UX Design",
        description:
            "Your website is often your first impression — let’s make it a great one. We offer full-stack Web Development services...",
        image: "/services/uiux.jpg",
        details: [
            {
                icon: <FaMobileAlt className="text-3xl text-white mb-4" />,
                title: "Responsive Design",
                text: "Our websites look and work great on all devices and screen sizes.",
            },
            {
                icon: <FaCode className="text-3xl text-white mb-4" />,
                title: "Full Stack Development",
                text: "We handle both front-end and back-end to deliver complete web solutions.",
            },
            {
                icon: <FaShieldAlt className="text-3xl text-white mb-4" />,
                title: "Secure & Scalable",
                text: "We prioritize security and future growth with every site we build.",
            },
        ],
    },
    {
        id: "4",
        title: "Digital Marketing",
        description:
            "Visuals speak louder than words — and our Graphic Design team knows how to make them unforgettable...",
        image: "/services/digital.jpg",
        details: [
            {
                icon: <FaPaintBrush className="text-3xl text-white mb-4" />,
                title: "Brand Identity",
                text: "We craft cohesive brand visuals from logos to full design kits.",
            },
            {
                icon: <FaLaptop className="text-3xl text-white mb-4" />,
                title: "UI/UX Mockups",
                text: "Our mockups are functional, attractive, and user-centered.",
            },
            {
                icon: <FaInstagram className="text-3xl text-white mb-4" />,
                title: "Social Media Graphics",
                text: "We create scroll-stopping visuals for all social platforms.",
            },
        ],
    },
    {
        id: "5",
        title: "SEO and Database",
        description:
            "In today’s fast-paced digital world, video content is king. Our Video Editing services help you produce high-quality, engaging videos...",
        image: "/services/seo.jpg",
        details: [
            {
                icon: <FaVideo className="text-3xl text-white mb-4" />,
                title: "Professional Editing",
                text: "From transitions to color grading, we deliver clean, polished videos.",
            },
            {
                icon: <FaVolumeUp className="text-3xl text-white mb-4" />,
                title: "Sound Design",
                text: "We add music, effects, and voiceovers that enhance viewer experience.",
            },
            {
                icon: <FaCloudUploadAlt className="text-3xl text-white mb-4" />,
                title: "Platform Ready",
                text: "Videos are formatted for YouTube, Reels, Ads, or any platform you need.",
            },
        ],
    },
    {
        id: "6",
        title: "Graphic Design",
        description:
            "Dive into the world of gaming with our creative and technically skilled Game Development services...",
        image: "/services/graphic.jpg",
        details: [
            {
                icon: <FaGamepad className="text-3xl text-white mb-4" />,
                title: "Unity & Unreal",
                text: "We use industry-standard engines to bring your game to life.",
            },
            {
                icon: <FaCogs className="text-3xl text-white mb-4" />,
                title: "Game Design",
                text: "From concept to storyboard, we design immersive game worlds.",
            },
            {
                icon: <FaGlobe className="text-3xl text-white mb-4" />,
                title: "Cross-Platform Coding",
                text: "Build once, deploy anywhere — mobile, desktop, or console.",
            },
        ],
    },
];

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-black">Service not found!</h2>
                <button
                    onClick={() => navigate("/services")}
                    className="mt-4 px-4 py-2 text-black rounded hover:cursor-pointer"
                >
                    Back to Services
                </button>
            </div>
        );
    }

    return (
<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white bg-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-black font-semibold hover:underline hover:cursor-pointer"
      >
        ← Back to Services
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="shine-wrapper">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
            {service.title}
          </h1>
          <p className="text-md md:text-lg text-gray-800 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {service.details && (
        <div className="mt-16">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
            Why Choose Us for {service.title}?
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We offer expert-level {service.title.toLowerCase()} services with
            results that speak for themselves.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {service.details.map((detail, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[linear-gradient(45deg,#C608FF,#1862A3)] shadow-lg hover:shadow-[0_10px_25px_rgba(24,200,255,0.3)] transition-all  cursor-pointer group transform hover:-translate-y-2 duration-300"
              >
                <div>{detail.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {detail.title}
                </h3>
                <p className="text-gray-100 text-sm">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
        .shine-wrapper:hover::after {
          animation: shine-move 1s ease-in-out forwards;
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

export default ServiceDetail;
