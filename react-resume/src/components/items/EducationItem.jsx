import React from "react";

const ExperienceItem = ({ degree }) => {
  console.log("ExperienceItem degree");
  console.log(degree);
  return (
    <div>
      <h3>{degree.Degree}</h3>
      <p>{degree.Institution}</p>
      <p>
        {degree.Address.City},{degree.Address.State}
      </p>
    </div>
  );
};

export default ExperienceItem;
