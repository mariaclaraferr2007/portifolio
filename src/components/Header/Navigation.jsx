import "./Navigation.css";
import TitleHeaderFooter from "../TitleHeaderFooter";
import React from "react";

function Navigation(props) {
  return (
    <header className="header">
      <TitleHeaderFooter />
      <nav>
        <div className="navigation-header">{props.children}</div>
      </nav>
    </header>
  );
}

export default Navigation;
