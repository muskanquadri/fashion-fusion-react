import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="ff-contact-page">

      {/* Header */}
      <div className="ff-contact-header">
        <h1>Contact Us</h1>
        <p>We’re here to help! Reach out to us anytime.</p>
      </div>

      <div className="ff-contact-container">

        {/* Left Section: Info */}
        <div className="ff-contact-info">
          <h2>Get in Touch</h2>

          <p><strong>Email:</strong> support@fashionfusion.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Nagpur, Maharashtra, India</p>

          <h3>Business Hours</h3>
          <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Right Section: Form */}
        <div className="ff-contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}
