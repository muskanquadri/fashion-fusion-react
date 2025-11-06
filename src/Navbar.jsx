// src/Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom' // ✅ Import Link
import './Navbar.css'

function Navbar() {
  return (
    

    <nav className="navbar">
      <div className="logo">Fashion Fusion</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li> {/* ✅ Goes to Products page */}
        <li><Link to="/about">About</Link></li>    {/* Optional future route */}
        <li><Link to="/contact">Contact</Link></li> {/* Optional future route */}
      </ul>
    </nav>
  
  )
}

export default Navbar