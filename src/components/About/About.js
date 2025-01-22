import React from "react";
import "./About.css";

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
            Hi, I'm Selva, a passionate backend developer with a keen interest
            in creating and selling portfolio solutions. My goal is to
            transition into freelancing and help individuals and businesses
            build seamless web experiences. Welcome to my creative journey!
          </p>
          <a href="#contact" className="about-cta">Contact Me</a>
        </div>
        <div className="about-photo">
          <img
            className="about-image"
            src="https://play-lh.googleusercontent.com/tvN_cFVM8jndf6Tizvx13lXryYNc0DsQj4xSqk7nHE9OSceM8R5RcK9RCtsRxJ2tdss=w240-h480-rw"
            alt="Selva"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
