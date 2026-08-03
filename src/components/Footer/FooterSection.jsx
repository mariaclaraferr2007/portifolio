import React from "react";

export default function FooterSection({ title, items }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
