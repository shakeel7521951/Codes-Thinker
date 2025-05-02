import React from "react";

const departments = {
  Management: [
    { name: "Waseem", role: "Manager", img: "./team/b1.jpg" },
    { name: "Ayesha", role: "Assistant Manager", img: "./team/g1.jpg" },
    { name: "Tahseen", role: "Coordinator", img: "./team/b2.jpg" },
  ],
  Development: [
    { name: "Sara", role: "Frontend Dev", img: "./team/g2.jpg" },
    { name: "Waqas", role: "Backend Dev", img: "./team/b3.jpg" },
    { name: "Kinza", role: "Fullstack Dev", img: "./team/g3.jpg" },
  ],
  Graphic: [
    { name: "Fakhar", role: "Designer", img: "./team/b4.jpg" },
    { name: "Fatima", role: "Illustrator", img: "./team/g4.jpg" },
  ],
  Marketing: [
    { name: "Hamza", role: "SEO Expert", img: "./team/b5.jpg" },
    { name: "Arooj", role: "Social Media Expert", img: "./team/g5.jpg" },
  ],
};

const OurTeam = () => {
  return (
    <div className="">
      <header className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Meet Our{" "}
          <span className="text-[#0F00AA]">
            Team
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-lg px-4 md:p-0 text-black">
          Our team of passionate and experienced professionals is dedicated to
          driving your success. From strategy to execution, we combine
          creativity, innovation, and insight to deliver exceptional results.
        </p>
      </header>

      {Object.entries(departments).map(([dept, members]) => (
        <section key={dept} className="py-10 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 text-start">
              {dept}{" "}
              <span className="text-[#0F00AA]">
                Department
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <div className="shine-wrapper h-80">
                    {" "}
                    {/* Increased height here */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#2E3944]/90 text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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

export default OurTeam;
