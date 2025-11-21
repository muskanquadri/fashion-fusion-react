import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Products from './products' // ✅ Import your Products page
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App