import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import LanguagesSlider from "./components/LanguagesSlider/LanguagesSlider";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [number, setNumber] = useState(1972);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const animateNumber = (from, to, duration) => {
    let start = from;
    const stepTime = duration / (to - from);

    const interval = setInterval(() => {
      if (start < to) {
        start++;
        setNumber(start);
      } else {
        clearInterval(interval);
      }
    }, stepTime);
  };

  useEffect(() => {
    animateNumber(1900, 2000, 1000);
  }, []); // Empty dependency array to run only once on component mount

  const actions = [
    {
      icon: <InstagramIcon />,
      name: "Instagram",
      onClick: () =>
        window.open("https://www.instagram.com/your_username", "_blank"),
    },
    {
      icon: <WhatsAppIcon />,
      name: "WhatsApp",
      onClick: () => window.open("https://wa.me/your_phone_number", "_blank"),
    },
    {
      icon: <LinkedInIcon />,
      name: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/your_profile", "_blank"),
    },
    {
      icon: <EmailIcon />,
      name: "Email",
      onClick: () => (window.location.href = "mailto:your_email@example.com"),
    },
  ];

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Home number={number} />
      <About />
      <LanguagesSlider />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
      <SpeedDial
        ariaLabel="Social Media Speed Dial"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          "& .MuiSpeedDial-fab": {
            backgroundColor: "#575757", // Primary color
            color: "#fff", // Icon color
            "&:hover": {
              backgroundColor: "#575757", // Darker shade on hover
            },
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
            sx={{
              backgroundColor: "#575757", // Action button color
              color: "#fff", // Icon color
              "&:hover": {
                backgroundColor: "#575757", // Darker shade on hover
              },
              "@media (max-width: 480px)": {
                width: 48, // Smaller buttons for mobile
                height: 48,
              },
            }}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default App;
