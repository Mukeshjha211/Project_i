// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'Node.js', level: 75 }
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
            </div>
            <div className="skill-level">{skill.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
