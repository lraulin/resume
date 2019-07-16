import React from "react";
import "./App.css";
import "./Section";
import Section from "./Section";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import resume from "./resume";

function App() {
  console.log(resume);
  return (
    <div>

      <Section
        sectionTitle={'Professional Experience'}
        items={resume.Professional_Experience}
        component={ExperienceItem}
      />
      <Section
        sectionTitle={'Education'}
        items={resume.Education}
        Component={EducationItem}
      />
    </div>
  );
}

export default App;
