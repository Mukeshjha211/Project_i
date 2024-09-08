// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Alice Johnson',
    feedback: 'Ishwar is a highly skilled developer with an exceptional ability to tackle complex problems.'
  },
  {
    name: 'Bob Smith',
    feedback: 'Great work! Ishwar delivered high-quality results and was very professional throughout the project.'
  },
  {
    name: 'Carol Davis',
    feedback: 'Ishwar’s creativity and technical skills made a huge difference to our project’s success.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id="testimonials">
      <h2 className="testimonials-title">What People Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
