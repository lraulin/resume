import React from "react";
import "./App.css";
import "./Section";
import Section from "./Section";
import resume from "../data/resume";

function App() {
  console.log(resume);
  return (
    <div>
      <Section
        sectionTitle={"Professional Experience"}
        items={resume.Professional_Experience}
      />
      <Section sectionTitle={"Education"} items={resume.Education} />
    </div>
  );
}

export default App;
