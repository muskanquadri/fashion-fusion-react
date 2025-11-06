// src/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/products') // ✅ Navigates to Products page
  }

  return (


    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Fashion Fusion</h1>
        <p>Trendy fashion, unbeatable prices.</p>
        <button onClick={handleClick}>Start Shopping</button>
      </div>
    </div>
    
  )
}

export default HeroSection