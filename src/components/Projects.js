import React from 'react';

function Projects() {
  const projects = [
    {
        title: "SAIL",
        description: "We enhance behavioral cloning by integrating a discriminator, eliminating the need for manual goal verification, guiding learning with expert state transitions, and preventing the policy model from idling, thereby avoiding bad local minima.",
        githubLink: "https://github.com/NathanGavenski/SAIL"
      },
    {
      title: "IUPE",
      description: "We introduce IUPE, an imitation learning framework that significantly enhances behavioral cloning by integrating sampling mechanisms and self-attention to improve exploration and avoid bad local minima.",
      githubLink: "https://github.com/NathanGavenski/IUPE"
    },
    {
      title: "ABCO",
      description: "Augmented Behavioral Cloning from Observation (ABCO) improves behavioral cloning by integrating inverse dynamics, self-attention, and sampling, achieving superior imitation of expert behavior across four environments.",
      githubLink: "https://github.com/NathanGavenski/ABCO"
    }
  ];

  return (
    <section id="projects">
      <h2 data-icon="🚀">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fab fa-github"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
