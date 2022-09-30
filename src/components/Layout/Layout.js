import React from 'react'
import Header from '../header/Header'
import WelcomeSection from '../welcome-section/WelcomeSection'
import About from '../about/About';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';

const Layout = () => {
  return(
  <>
    <Header />
    <WelcomeSection />
    
    <About />
    <Experience />
    <Portfolio />
    <Contact />
  </>
  );
};

export default Layout