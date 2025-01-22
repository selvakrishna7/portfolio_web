import React from "react";
import "./Home.css";

const Home = ({ number }) => {
  return (
    <section id="home" className="section home">
      <div className="portfolio-design-container">
        <div className="main-title">
          <span className="highlighted-name">SELVA'S </span> PORTFOLIO
        </div>
        <div className="subtitle">Selva Krishna | Software Developer</div>
        <div className="subtitle">
          Since - <span className="highlighted-text">{String(number).padStart(4, "0")}</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
