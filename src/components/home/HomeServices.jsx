import React, { useState, useEffect } from 'react';

const HomeServices = () => {
  const services = [
    {
      name: "Management",
      tags: [
        "Community Management", "Social Media Management", "Social Media Moderation"
      ]
    },
    {
      name: "Marketing",
      tags: [
        "SEO (On-Page)", "SEO (Off-Page)", "Influencer Marketing", "Content Marketing", "Lead Generation", "Email Campaigns"
      ]
    },
    {
      name: "Development",
      tags: [
        "Custom Development", "Web App Development", "Mobile App Development", "Blockchain Dev", "Crypto Token Dev", "Wordpress Dev"
      ]
    },
    {
      name: "Graphics & Visuals",
      tags: [
        "Logo Design", "Stationary Design", "Social Media Design", "UI/UX Design", "Web Design"
      ]
    },
    {
      name: "Video Editing",
      tags: [
        "Motion Graphics", "Youtube Video", "Brand Video", "Podcast Video", "Documentary"
      ]
    },
    {
      name: "Content Writing",
      tags: [
        "Web Content Writing", "Product Description", "White Paper Content", "Blog Writing", "Case Studies"
      ]
    },
  ];

  const [selectedService, setSelectedService] = useState(services[1]);

  useEffect(() => {
    const defaultService = services.find(service => service.name === "Marketing");
    setSelectedService(defaultService);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="bg-white py-10">
      <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-center text-black">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(241deg,#18c8ff_14.59%,#c608ff_59.76%)]">
          Services
        </span>{" "}
        We Offer
      </h1>
      <p className="text-center flex mx-auto px-5 md:w-[50rem]">
        TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom development, and professional video editing to elevate your brand.
      </p>
      <div className="container flex flex-col md:flex-row gap-10 mx-auto rounded-3xl my-6 bg-[#41609B] p-5">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {services.map((service, index) => (
            <h4
              key={index}
              className={`text-center px-10 py-2 rounded-3xl border shadow cursor-pointer font-bold text-2xl ${
                service.name === selectedService.name ? "bg-[#1d8fb1] text-white" : "bg-[#222F6B] text-white"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              {service.name}
            </h4>
          ))}
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
          <img src="./home/servicesImage.png" alt="Services section" loading="lazy" />
          {selectedService.tags && (
            <div className="mt-3 flex gap-3 flex-wrap justify-center">
              {selectedService.tags.map((tag, index) => (
                <h4
                  key={index}
                  className="bg-[#165F91] w-fit px-3 py-2 rounded-xl font-semibold"
                >
                  {tag}
                </h4>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;