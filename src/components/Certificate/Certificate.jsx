import React from "react";
import Slider from "react-slick";
import "./Certificate.css";

// Data for the cards
const companies = [
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
  {
    name: "Learn",
    description: "Fill out the form and the algorithm will offer the right team of experts",
    imgSrc: "https://engineering.fb.com/wp-content/uploads/2016/12/grid-AI.jpg",
  },
];

const Certificate = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable auto-scrolling
  autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="certificate-section">
      <h2 className="section-title">Certificate</h2>
      <Slider {...settings} className="card-slider">
        {companies.map((company, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={company.imgSrc}
                  alt={company.name}
                />
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{company.name}</h3>
              <p className="card-description">{company.description}</p>
              <div className="card-actions">
                <button className="card-button">View</button>
                <button className="card-button">Download</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Certificate;
