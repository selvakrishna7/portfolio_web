import React, { useState } from "react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    logo: "https://via.placeholder.com/50", // Placeholder for company logo
    date: "January 2023 - Present",
    skills: ["React.js", "CSS3 / SCSS", "JavaScript", "TypeScript"],
    description:
      "Developed and maintained web applications using React.js, focusing on performance optimization and responsive design.",
    details:
      "At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.At Tech Corp, I collaborated with a cross-functional team to build scalable React applications. I focused on optimizing web performance, implementing responsive designs, and ensuring cross-browser compatibility. My contributions resulted in a 25% faster load time and increased user engagement by 15%.",
    image: "https://png.pngtree.com/background/20230617/original/pngtree-business-growth-graph-in-3d-rendering-picture-image_3668005.jpg", // Placeholder for experience-related image
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Web Solutions",
    logo: "https://via.placeholder.com/50",
    date: "June 2021 - December 2022",
    skills: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Worked on frontend development with a focus on creating user-friendly interfaces and ensuring mobile compatibility.",
    details:
      "At Web Solutions, I developed responsive websites for small businesses, ensuring optimal performance and user experience. I implemented interactive features using JavaScript, achieving high client satisfaction ratings and increased conversions.",
    image: "https://via.placeholder.com/150",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openDetails = (id) => {
    const experience = experiences.find((exp) => exp.id === id);
    setSelectedExperience(experience);
  };

  const closeDetails = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="experience-container">
      <h2 className="section-title">My Experience</h2>
      {experiences.map((exp) => (
        <div className="experience-card" key={exp.id}>
          <div className="card-header">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="company-logo"
            />
            <h3>{exp.title}</h3>
          </div>
          <p className="company-name">{exp.company}</p>
          <p className="date">{exp.date}</p>
          <ul className="skills">
            {exp.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p className="description">{exp.description}</p>
          <img src={exp.image} alt={`${exp.company}`} className="experience-image" />
          <button className="details-button" onClick={() => openDetails(exp.id)}>
            More Details
          </button>
        </div>
      ))}

      {selectedExperience && (
        <div className="details-modal">
          <div className="modal-content">
            <h3>{selectedExperience.title}</h3>
            <p className="company-name">{selectedExperience.company}</p>
            <p className="date">{selectedExperience.date}</p>
            <p className="details-description">{selectedExperience.details}</p>
            <button className="close-button" onClick={closeDetails}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
