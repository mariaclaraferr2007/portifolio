import "./components/Header/Navigation.css";
import Navigation from "./components/Header/Navigation";
import Footer from "./components/Footer/Footer";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Circle from "./components/Circle/Circle";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav>
        <Navigation>
          <ul>
            <li>
              <a href="#about">ABOUT ME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT ME</a>
            </li>
          </ul>
        </Navigation>
      </nav>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Circle activeSection={activeSection} />
    </div>
  );
}

export default App;
