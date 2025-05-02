import React from 'react'
import AboutHero from '../components/about/AboutHero';
import OurValue from '../components/home/OurValue';
import WhoWeAre from '../components/about/WhoWeAre';
import HomeAbout from '../components/home/HomeAbout';

const About = () => {
  return (
    <div>
      {/* <AboutHero/> */}
      <HomeAbout />
      <WhoWeAre/>
      <OurValue/>
    </div>
  )
}

export default About;