import React from "react";

const Section = ({
  sectionTitle = "[SECTION TITLE MISSING]",
  items = [],
  Component,
}) => (
  <div>
    <h2>{sectionTitle}</h2>
    <ul style={{ listStyle: "none" }}>
      {items.map(item => (
        <li>{React.createElement(Component, { item })}</li>
      ))}
    </ul>
  </div>
);

export default Section;
