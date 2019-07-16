import React from 'react';

const ExperienceItem = ({job}) => {
  console.log(job)
  return (
    <div>
      <h3>{job.Job_Title}</h3>
      <p>{`${job.Start_Date} to ${job.End_Date || 'Current'}`}</p>
      <p>{job.Company}</p>
    </div>
  );
};

export default ExperienceItem;

