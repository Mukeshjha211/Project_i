// src/components/Hero.js
import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [heroData] = useState({
    name: 'Ishwar Sharma',
    title: 'Creative Developer',
    buttonText: 'Explore My Work'
  });

  return (
    <div className="hero-container">
      <h1 className="name">{heroData.name}</h1>
      <h2 className="title">{heroData.title}</h2>
      <a className="cta-button" href="#about">{heroData.buttonText}</a>
    </div>
  );
};

export default Hero;
