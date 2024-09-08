// src/components/AboutMe.js
import React, { useState } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [aboutMeData] = useState({
    title: 'About Me',
    description: [
      'Hi, I\'m Ishwar Sharma, a passionate and creative developer with a love for building beautiful, functional web experiences.',
      'I enjoy working with modern web technologies like React.js, and I’m constantly learning and exploring new tools to improve my skills.'
    ]
  });

  return (
    <div className="about-container" id="about">
      <h2 className="about-title">{aboutMeData.title}</h2>
      {aboutMeData.description.map((text, index) => (
        <p className="about-description" key={index}>{text}</p>
      ))}
    </div>
  );
};

export default AboutMe;
