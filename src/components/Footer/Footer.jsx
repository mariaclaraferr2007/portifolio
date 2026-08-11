import React from "react";
import FooterSection from "./FooterSection";
import SocialIcons from "../SocialIcons";
import "./Footer.css";
import TitleHeaderFooter from "../TitleHeaderFooter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <TitleHeaderFooter />
        <p>Desenvolvedora Front-end</p>
        <SocialIcons />
      </div>

      <FooterSection
        title="NAVEGAÇÃO"
        items={[
          { label: "ABOUT ME", href: "#about" },
          { label: "PROJECTS", href: "#projects" },
          { label: "CONTACT ME", href: "#contact" },
        ]}
      />
      <FooterSection
        title="REDES SOCIAS"
        items={[
          { label: "INSTAGRAM", href: "https://www.instagram.com/maria_ferreira_5350?igsh=aHNua2l2MTVoOTl2" },
          { label: "LINKEDIN", href: "https://www.linkedin.com/in/maria-clara-ferreira-lopes/" },
          { label: "GITHUB", href: "https://github.com/mariaclaraferr2007" },
        ]}
      />
    </footer>
  );
}
