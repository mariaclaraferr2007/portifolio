import "./Navigation.css";
import TitleHeaderFooter from "../TitleHeaderFooter";
import React, { useState } from "react";

function Navigation(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <TitleHeaderFooter />
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navigation-header ${menuOpen ? "open" : ""}`}>
        <div onClick={() => setMenuOpen(false)}>{props.children}</div>
      </nav>
    </header>
  );
}

export default Navigation;
