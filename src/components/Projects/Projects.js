import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "https://via.placeholder.com/300",
    description: "A full-stack e-commerce platform with payment integration.",
    website: "https://ecommerce-example.com", // Link to the project website
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },{
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },{
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },{
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },{
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },{
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/300",
    description: "A responsive portfolio website to showcase personal projects.",
    website: "https://portfolio-example.com", // Link to the project website
  },
  {
    id: 3,
    title: "Social Media App",
    image: "https://via.placeholder.com/300",
    description: "A social media platform with real-time chat features.",
    website: "https://socialmedia-example.com", // Link to the project website
  },
];

const ProjectPage = () => {
  return (
    <div className="project-page">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="details-button"
            >
              View Site
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
