import React from "react";
import "./LanguagesSlider.css";

const languages = [
  { id: 1, name: "HTML", logo: "https://static.vecteezy.com/system/resources/thumbnails/013/313/458/small_2x/html-icon-3d-rendering-illustration-free-vector.jpg" },
  { id: 2, name: "CSS", logo: "https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg" },
  { id: 3, name: "JavaScript", logo: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" },
  { id: 4, name: "React", logo: "https://media.licdn.com/dms/image/v2/C4E12AQGoAiCvhcQWoA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1593179967215?e=2147483647&v=beta&t=WlGbGUf9QzF3JBKnILbh_MsfZbyh6UzR2l22gsxxWhs" },
  { id: 6, name: "Python", logo: "https://quantumzeitgeist.com/wp-content/uploads/pythoned.png" },
  { id: 8, name: "MySQL", logo: "https://quantumzeitgeist.com/wp-content/uploads/pythoned.png" },
];

// Duplicating the array for smooth looping
const duplicatedLanguages = [...languages, ...languages];

const LanguagesSlider = () => {
  return (
    <div className="scroll-container">
      <h2>Languages We Support</h2>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {duplicatedLanguages.map((language, index) => (
            <div key={index} className="business-logo">
              <img src={language.logo} alt={language.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesSlider;
