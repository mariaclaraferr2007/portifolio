import React from "react";
import "./Circle.css";

export default function Circle({ activeSection }) {
  const sections = ["hero", "about", "projects", "contact"];

  return (
    <div className="circle-navigation">
      {sections.map((section) => (
        <div
          key={section}
          className={`nav-circle ${activeSection === section ? "active" : ""}`}
        />
      ))}
    </div>
  );
}