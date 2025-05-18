import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Publications from '../components/Publications';
import EducationTimeline from '../components/Education';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  
  return (
    <div className='flex flex-col'>
        <HeroSection/>
        <About/>
        <Projects/>
        <Publications/>
        <EducationTimeline/>
        <ContactSection/>
        <Footer/>
    </div>
  );

}

export default LandingPage;