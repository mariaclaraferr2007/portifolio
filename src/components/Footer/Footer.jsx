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
        items={["SOBRE", "PROJECTS", "CONNECT"]}
      />
      <FooterSection
        title="REDES SOCIAS"
        items={["INSTAGRAM", "LINKEDIN", "GITHUB"]}
      />
    </footer>
  );
}
