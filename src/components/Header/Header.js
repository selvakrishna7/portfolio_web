import React, { useState } from "react";
import { Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <header>
      <div className="logo">
        <h2>MyLogo</h2>
      </div>
      <div className={`nav-bar ${isMenuOpen ? "open" : ""}`}>
        <button className="nav-btn" onClick={() => scrollToSection("home")}>
          Home
        </button>
        <button className="nav-btn" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button className="nav-btn" onClick={() => scrollToSection("experience")}>
          Experience
        </button>
        <button className="nav-btn" onClick={() => scrollToSection("projects")}>
          Projects
        </button>
        <button className="nav-btn" onClick={() => scrollToSection("contact")}>
          Contact Us
        </button>
      </div>
      <div className="mobile-menu-toggle">
        <button className="menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className="theme-switch-wrapper">
        <Switch
          checked={isDarkMode}
          onChange={toggleTheme}
          color="primary"
          sx={{
            width: 60,
            height: 34,
            "& .MuiSwitch-thumb": {
              backgroundColor: isDarkMode ? "#fff" : "#000",
            },
            "& .MuiSwitch-track": {
              backgroundColor: isDarkMode ? "#666" : "#ccc",
            },
          }}
        />
      </div>
    </header>
  );
};

export default Header;
