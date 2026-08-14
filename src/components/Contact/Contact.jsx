import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import ParticlesBackground from "../ParticlesBackground";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <ParticlesBackground />
      <div className="contact-content">
        <h2>Contact Me</h2>
        <hr />
        <p>
          Estou aberta a <span className="highlight">oportunidades</span>,
          projetos e conversas sobre desenvolvimento. Fica à vontade pra entrar
          em contato por qualquer um dos canais abaixo.
        </p>

        <div className="contact-links">
          <a
            href="mailto:mariaclaraferreiralopes82@gmail.com"
            className="contact-item"
          >
            <FaEnvelope />
            <span>mariaclaraferreiralopes82@gmail.com</span>
          </a>

          <a href="tel:+5531972385350" className="contact-item">
            <FaPhone />
            <span>(31) 97238-5350</span>
          </a>

          <a
            href="https://www.linkedin.com/in/maria-clara-ferreira-lopes/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/mariaclaraferr2007"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
