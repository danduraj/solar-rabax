import React, { useRef } from 'react';
import Header from './Header';
import Hero from './Home/Hero';
import Features from './Home/Features';
import Footer from './Footer';
import About from './Home/About';
import SavingsCalculator from './Home/SavingsCalculator';

import Layout from './Layout';

const Home = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <>
      <Header />
      <Hero />
      <div>
        <About scrollToFeatures={scrollToFeatures} />
      </div>
      <div ref={featuresRef}>
        <Features />
      </div>
      <div>
        <SavingsCalculator />
      </div>
      <Footer />
      <Layout/>
      
    </>
  );
};

export default Home;
