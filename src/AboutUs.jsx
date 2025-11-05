// src/AboutUs.jsx
import React from 'react';
import './AboutUs.css';
import aboutImg from './assets/h8.jpg'; // replace with your actual image

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={aboutImg} alt="About Fashion Fusion" />
      </div>
      <div className="about-content">
        <h1>About Fashion Fusion</h1>
       
        <p>
          Fashion Fusion is your go-to destination for trendy, affordable, and elegant fashion.
          From ethnic wear to modern accessories, we blend tradition with style to help you express your unique personality.
        </p>
        <div className="about-buttons">
          <button className="filled-btn">Start Shopping</button>
           <button className="empty-btn">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;