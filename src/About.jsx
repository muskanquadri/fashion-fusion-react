import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="ff-about-page">

      {/* Hero Section */}
      <div className="ff-about-hero">
        <h1>About FashionFusion</h1>
        <p>Where style meets comfort, and trends meet affordability.</p>
      </div>

      {/* Main Content */}
      <div className="ff-about-content">

        <div className="ff-about-left">
          <h2>Our Story</h2>
          <p>
            FashionFusion started with a simple belief — fashion should be for 
            everyone. We bring you a curated selection of stylish outfits, 
            premium-quality materials, and timeless designs at budget-friendly prices.
          </p>

          <p>
            From casual wear to ethnic, from accessories to footwear — we continue 
            expanding to offer everything you need for a complete fashion experience.
          </p>
        </div>

        <div className="ff-about-right">
          <img 
            src="https://i.pinimg.com/736x/86/fd/e5/86fde50af94f411e31234cfa9d73716f.jpg" 
            alt="FashionFusion banner"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="ff-about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide high-quality fashion at affordable prices and make shopping 
          a seamless, joyful experience for everyone.
        </p>
      </div>

    </div>
  );
}
