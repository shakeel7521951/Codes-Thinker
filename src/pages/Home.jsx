import React from 'react'
import Header from '../components/home/Header';
import HomeAbout from '../components/home/HomeAbout';
import HomeServices from '../components/home/HomeServices';

const Home = () => {
  return (
    <div>
        <Header />
        <HomeAbout />
        <HomeServices />
    </div>
  )
}

export default Home;