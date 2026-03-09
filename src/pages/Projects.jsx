import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';



const Projects = () => {
  const projects = [
    /*
          NOTE: basics info
          id: 1,
          title: 'Neon E-Commerce',
          description: 'A full-stack e-commerce platform with dark mode, real-time cart validation, and seamless Stripe integration.',
          image: 'https://images.unsplash.com/photo-1557821552-17105153ce67?q=80&w=800&auto=format&fit=crop',
          tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          github: '#',
          demo: '#'
    */
  ];
  if (projects[0] === undefined) {
    return (
      <div className="page-transition-wrapper projects-page">
        <h1 className="section-title">My Projects</h1>
        <p>Currently have no projects :(</p>
      </div>
    );
  } else {
    return (
      <div className="page-transition-wrapper projects-page">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card glass"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="icon-link tooltip" data-tooltip="Source Code">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="icon-link tooltip" data-tooltip="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
}
export default Projects;
