import React from "react";

export default function FooterSection({ title, items }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href ?? "#"} target={item.href?.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">{item.label ?? item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
