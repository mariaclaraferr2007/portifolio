import React from "react";
import "./Hero.css";
import ParticlesBackground from "../ParticlesBackground";
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <ParticlesBackground />
      <div className="hero-content">
        <img src="/Perfil.jpg" alt="Clara Lopes" className="hero-img" />
        <h1>Hello. I am Clara Lopes.</h1>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <a href="#contact">
          <button className="hero-btn">VAMOS CONVERSAR!</button>
        </a>
      </div>
    </section>
  );
}
