import React from 'react'
import Header from '../components/home/Header';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';
import KeyFeatures from '../components/home/KeyFeatures';
import OurValue from '../components/home/OurValue';
import Progress from '../components/home/Progress';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
        <Header />
        <HomeAbout />
        <HomeServices />
        <KeyFeatures />
        <OurValue />
        <Progress />
        <Testimonials />
    </div>
  )
}

export default Home;