import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Products from './products' // ✅ Import your Products page

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <AboutUs />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* ✅ Add this route */}
      </Routes>
    </Router>
  )
}

export default App