import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import novieta1 from '../../../public/project/novieta1.png';
import novieta2 from '../../../public/project/novieta2.png';
import novieta3 from '../../../public/project/novieta3.png';
import novieta4 from '../../../public/project/novieta4.png';
import Aos from 'aos';
const projectsData = {
  All: [
    {
      title: 'Multi-Service Creative Agency',
      description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
      featured: novieta1,
      thumbnails: [
        novieta1, novieta2, novieta3, novieta4
      ],
      link: 'https://novietaaplus.com/',
      aos: 'fade-right', duration: '1000'
    },
    {
      title: 'Trend Car Care',
      description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
      featured: '../../../public/project/trend1.png',
      thumbnails: [
        '../../../public/project/trend1.png',
        '../../../public/project/trend2.png',
        '../../../public/project/trend3.png',
        '../../../public/project/trend4.png',
      ],
      link: 'https://trendcarcare.com/',
      aos: 'fade-right', duration: '1000'
    },
    {
      title: 'Cash rewards game',
      description: 'Become part of a thriving global community today and unlock thousands of dollars in earnings while connecting with a diverse international network.',
      featured: '../../../public/project/bmx1.png',
      thumbnails: [
        '../../../public/project/bmx1.png',
        '../../../public/project/bmx2.png',
        '../../../public/project/bmx3.png',
        '../../../public/project/bmx4.png',
      ],
      link: 'https://www.bmxadventure.com/',
      aos: 'fade-right', duration: '1000'
    },

  ],
  'Website development': [
    {
      title: 'Multi-Service Creative Agency',
      description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
      featured: novieta1,
      thumbnails: [
        novieta1, novieta2, novieta3, novieta4
      ],
      link: 'https://novietaaplus.com/',
      aos: 'fade-right', duration: '1000'
    },
    {
      title: 'Trend Car Care',
      description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
      featured: '../../../public/project/trend1.png',
      thumbnails: [
        '../../../public/project/trend1.png',
        '../../../public/project/trend2.png',
        '../../../public/project/trend3.png',
        '../../../public/project/trend4.png',
      ],
      link: 'https://trendcarcare.com/',
      aos: 'fade-right', duration: '1000'
    },
    {
      title: 'Cash rewards game',
      description: 'Become part of a thriving global community today and unlock thousands of dollars in earnings while connecting with a diverse international network.',
      featured: '../../../public/project/bmx1.png',
      thumbnails: [
        '../../../public/project/bmx1.png',
        '../../../public/project/bmx2.png',
        '../../../public/project/bmx3.png',
        '../../../public/project/bmx4.png',
      ],
      link: 'https://www.bmxadventure.com/',
      aos: 'fade-right', duration: '1000'
    },
  ],
  'App development': [

  ],
  'UI/UX design': [

  ],
};

function ProjectCard({ title, description, featured, thumbnails, link, aos, duration }) {
  const [featuredImage, setFeaturedImage] = useState(featured);

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4 transition duration-300 ease-in-out hover:shadow-lg'>
      {/* Featured Image */}
      <img
        src={featuredImage}
        alt='Featured Project'
        style={{ backgroundSize: '100% 100%' }}
        className='w-full h-full  transition duration-300 ease-in-out'
        data-aos={aos}
      />

      <div className='p-4' data-aos='fade-left' data-aos-duration={duration}>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600 mb-4'>{description}</p>

        {/* Thumbnails */}
        <div className='flex gap-3 mb-4 flex-wrap'>
          {thumbnails.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Thumb ${idx}`}
              onClick={() => setFeaturedImage(img)}
              className='w-24 h-24 mx-auto sm:mx-0 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#001196] transition'
            />
          ))}
        </div>

        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button
            aria-label="Get Started"
            className="mt-2 px-4 py-2 cursor-pointer text-white text-lg font-semibold rounded-full shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
          >
            View Project
          </button>
        </a>
      </div>
    </div>
  );
}




export default function ProjectHome() {
  const [project, setProject] = useState('All');

  const renderContent = () => {
    const currentProjects = projectsData[project] || [];

    return (
      <div className='space-y-8'>
        {currentProjects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className='p-4'>
      <div>
        <h1 className='text-center sm:text-3xl p-3 font-semibold'>Project Section</h1>
        <p className='text-center w-full mx-auto font-semibold mb-3 sm:w-7/12' >
          Explore a range of projects we’ve worked on across web, mobile, and design.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className='flex justify-center items-center flex-wrap'>
        {Object.keys(projectsData).map((item, index) => (
          <button
            key={index}
            onClick={() => setProject(item)}
            className={` font-semibold p-3 rounded-md m-2 transition duration-200 
                ${project === item ? 'bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left text-white' : 'hover:bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:text-white'}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Rendered Cards */}
      <div className='mx-auto w-full sm:w-10/12 mt-6'>{renderContent()}</div>
    </div>
  );
}
