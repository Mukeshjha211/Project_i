// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Project One',
      description: 'A web application that helps users manage their tasks effectively.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform for buying and selling products online.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Project Three',
      description: 'A personal blog where users can write and share articles.',
      image: 'https://via.placeholder.com/300x200'
    }
  ]);

  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
