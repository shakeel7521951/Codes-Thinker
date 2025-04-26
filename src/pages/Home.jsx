import React from 'react'
import Header from '../components/home/Header';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';
import KeyFeatures from '../components/home/KeyFeatures';

const Home = () => {
  return (
    <div>
        <Header />
        <HomeAbout />
        <HomeServices />
        <KeyFeatures />
    </div>
  )
}

export default Home;