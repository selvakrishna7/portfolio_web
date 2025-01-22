import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div >
      <h2 className="section-title">contact</h2>
      </div>
      <div className="contact-container1">
      {/* <div className="contact-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBiYXI1vyEb1eh9-95NqaUPVnPi0dYUxmHw&s" alt="Your Image"/>
      </div> */}

      <div className="contact-form-container">
        <div className="form-card">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message..." required />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
     
      </div>
    </div>
  );
};

export default Contact;
