import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import AboutUs from './AboutUs';
import Footer from './Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;