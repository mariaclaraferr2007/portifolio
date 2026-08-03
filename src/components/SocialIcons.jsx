import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.instagram.com/maria_ferreira_5350?igsh=aHNua2l2MTVoOTl2"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/maria-clara-ferreira-lopes/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/mariaclaraferr2007"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
}
