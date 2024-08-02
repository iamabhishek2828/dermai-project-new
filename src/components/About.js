import React from 'react';
import '../styles/About.css';
import ceoImage from '../assets/images/ceo.jpg';
import ctoImage from '../assets/images/cto copy.jpg';
import CMOImage from '../assets/images/CMO.jpg';
const About = () => (
  <div className="about-container">
    <section className="hero-section">
      <div className="hero-content">
        <h1>About DermAi</h1>
        <p>Innovative AI solutions for skin health</p>
      </div>
    </section>

    <section className="mission-section">
      <h2>Our Mission</h2>
      <p>At DermAi, our mission is to revolutionize dermatology by providing accessible, accurate, and personalized skin health solutions. We strive to bridge the gap between patients and dermatologists, ensuring that everyone has access to quality skin care, regardless of their location.</p>
    </section>

    <section className="features-section">
      <h2>Features</h2>
      <ul>
        <li><strong>AI-Powered Diagnosis:</strong> Our advanced AI algorithms analyze skin images to provide accurate diagnoses for a variety of skin conditions.</li>
        <li><strong>Personalized Treatment Plans:</strong> Based on the diagnosis, we offer personalized treatment plans to help you manage and treat your skin condition effectively.</li>
        <li><strong>Remote Consultations:</strong> Connect with experienced dermatologists from the comfort of your home through our seamless telemedicine platform.</li>
        <li><strong>Progress Tracking:</strong> Monitor your skin health and track your treatment progress with our user-friendly interface.</li>
      </ul>
    </section>

    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
      <div className="team-member">
      <img src={ceoImage} alt="CEO" />
      <h3>Abhishek</h3>
      <p>Founder & CEO</p>
    </div>
        <div className="team-member">
          <img src={ctoImage} alt="CTO" />
          <h3>Jane Smith</h3>
          <p>Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <img src={CMOImage} alt="CMO" />
          <h3>Emily Johnson</h3>
          <p>Chief Medical Officer</p>
        </div>
      </div>
    </section>

  </div>
);

export default About;
