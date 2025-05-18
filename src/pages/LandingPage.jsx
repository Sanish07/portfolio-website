import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';

const LandingPage = () => {
  
  return (
    <div className='flex flex-col'>
        <HeroSection/>
        <About/>
        <Projects/>
    </div>
  );

}

export default LandingPage;