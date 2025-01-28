import React from "react";
import "./About.css";
import image_me from '../1720025962820.jpeg'
const About = () => {
  return (
    <section id="about" className="section about">
      {/* <div className="video-background">
      <video 
    src="https://cdn.pixabay.com/video/2019/11/06/28781-372045658_large.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline 
    className="background-video"
  />
      </div> */}
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
    Hi, I'm Selva, a backend developer with 2+ years of experience in crafting robust, scalable, and efficient web solutions. 
    I specialize in working with Django, MongoDB,React-JS, AWS EC2, and have hands-on experience in integrating React.js for full-stack projects.
    With a strong passion for innovation, I aim to simplify complex problems and deliver seamless digital experiences.
    As I transition into freelancing, my mission is to help individuals and businesses bring their ideas to life through tailored, high-quality solutions. 
    Let's collaborate and turn your vision into reality. Welcome to my journey!
</p>
          <a href="#contact" className="about-cta">Contact Me</a>
        </div>
        <div className="about-photo">
        <img
  className="about-image"
  src={image_me}
  alt="Selva"
/>
        </div>
      </div>
    </section>
  );
};

export default About;
