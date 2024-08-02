// src/components/Home.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Ensure this path is correct

// Import images
import backgroundImage from '../assets/images/background.jpg'; // Use a single background image
import featureImage1 from '../assets/images/image4.jpg';
import featureImage2 from '../assets/images/image2.jpg.jpg';
import featureImage3 from '../assets/images/image3.jpg.png';

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [featureImage1, featureImage2, featureImage3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);

  const handleGetStarted = () => {
    navigate('/upload');
  };

  return (
    <div>
      <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-content">
          <h1>Welcome to DermAi</h1>
          <p>Your AI solution for skin disease treatment.</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="features-content">
          <h2>Our Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <img src={featureImage1} alt="Instant Diagnosis" className="feature-image" />
              <h3>Instant Diagnosis</h3>
              <p>Upload a photo of your skin condition and receive an instant diagnosis.</p>
            </div>
            <div className="feature-item">
              <img src={featureImage2} alt="Treatment Options" className="feature-image" />
              <h3>Treatment Options</h3>
              <p>Explore treatment options tailored to your diagnosis.</p>
            </div>
            <div className="feature-item">
              <img src={featureImage3} alt="Consult with Doctors" className="feature-image" />
              <h3>Consult with Doctors</h3>
              <p>Get in touch with dermatologists for a more detailed consultation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>"DermAi changed my life! The diagnosis was spot on."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-item">
            <p>"The AI was able to quickly identify my skin issue. Amazing!"</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="testimonial-item">
            <p>"Highly recommend DermAi for anyone dealing with skin problems."</p>
            <h4>- Alice Johnson</h4>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 DermAi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
