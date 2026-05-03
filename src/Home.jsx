import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
