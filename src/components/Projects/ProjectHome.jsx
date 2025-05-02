import React, { useState } from 'react';

const projectsData = {
  All: [
    {
      title: 'E-Commerce Website',
      description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
      featured: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s',
      thumbnails: [
        'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
      ],
      link: 'https://yourprojectlink.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A clean portfolio showcasing work and contact form.',
      featured: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      thumbnails: [
        'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_640.jpg',
        'https://cdn.pixabay.com/photo/2021/08/18/08/53/hummingbird-6554093_640.jpg',
        'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg',
      ],
      link: 'https://portfolio.com',
    },
    {
      title: 'Admin Dashboard',
      description: 'Manage data, view stats, and generate reports.',
      featured: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      thumbnails: [
        'https://cdn.pixabay.com/photo/2022/11/03/09/45/mountains-7567495_640.jpg',
        'https://cdn.pixabay.com/photo/2021/02/16/17/35/river-6021980_640.jpg',
        'https://cdn.pixabay.com/photo/2017/08/30/07/51/lake-2691157_640.jpg',
      ],
      link: 'https://adminpanel.com',
    },
  ],
  'Website development': [
    {
        title: 'E-Commerce Website',
        description: 'A fully responsive online store with cart, payment gateway, and admin panel.',
        featured: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s',
        thumbnails: [
          'https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s',
        ],
        link: 'https://yourprojectlink.com',
      },
      {
        title: 'Portfolio Website',
        description: 'A clean portfolio showcasing work and contact form.',
        featured: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        thumbnails: [
          'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_640.jpg',
          'https://cdn.pixabay.com/photo/2021/08/18/08/53/hummingbird-6554093_640.jpg',
          'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg',
        ],
        link: 'https://portfolio.com',
      },
      {
        title: 'Admin Dashboard',
        description: 'Manage data, view stats, and generate reports.',
        featured: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
        thumbnails: [
          'https://cdn.pixabay.com/photo/2022/11/03/09/45/mountains-7567495_640.jpg',
          'https://cdn.pixabay.com/photo/2021/02/16/17/35/river-6021980_640.jpg',
          'https://cdn.pixabay.com/photo/2017/08/30/07/51/lake-2691157_640.jpg',
        ],
        link: 'https://adminpanel.com',
      },
  ],
  'App development': [

  ],
  'UI/UX design': [

  ],
};

function ProjectCard({ title, description, featured, thumbnails, linkuuuuu }) {
  const [featuredImage, setFeaturedImage] = useState(featured);

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-4 transition duration-300 ease-in-out hover:shadow-lg'>
      {/* Featured Image */}
      <img
        src={featuredImage}
        alt='Featured Project'
        className='w-full h-64 object-cover transition duration-300 ease-in-out'
      />

      <div className='p-4'>
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
              className='w-24 h-24 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-[#009688] transition'
            />
          ))}
        </div>

        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button className='bg-[#009688] text-white font-semibold px-4 py-2 rounded hover:bg-[#00796B] transition'>
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

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-center sm:text-3xl p-3 font-semibold'>Project Section</h1>
        <p className='text-center w-full mx-auto font-semibold mb-3 sm:w-7/12'>
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
                ${project === item ? 'bg-[#009688] text-white' : 'hover:bg-[#009688] hover:text-white'}`}
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
