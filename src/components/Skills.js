import React from 'react';

function Skills() {
  const skills = [
    "GenAI",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Data Science",
    "Artificial Intelligence",
    "Software Engineering",
    "Git"
  ];

  return (
    <section id="skills">
      <h2 data-icon="🛠️">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
