import React from "react";
import EducationItem from "./items/EducationItem";
import ExperienceItem from "./items/ExperienceItem";

const spacesToUnderscores = str => str.replace(/\s/g, "_");

const sectionSelector = ({ sectionTitle = "", item = {} }) => {
  console.log("Section.jsx sectionSelector()");
  console.log(sectionTitle, item);
  const sections = {
    Education: <EducationItem degree={item} />,
    Professional_Experience: <ExperienceItem job={item} />,
  };

  return sections[spacesToUnderscores(sectionTitle)];
};

const Section = ({ sectionTitle = "[SECTION TITLE MISSING]", items = [] }) => {
  console.log(sectionTitle);
  console.log(items);
  return (
    <div>
      <h2>{sectionTitle}</h2>
      <ul style={{ listStyle: "none" }}>
        {items.map(item => (
          <li>{sectionSelector({ sectionTitle, item })}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
