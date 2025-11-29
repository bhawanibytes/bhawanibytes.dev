import React from "react";
import ExperienceCard from "../ExperienceCard";
import { experiences } from "@constants";

const Experience = () => {
  return (
    <div className='flex flex-col gap-4'>
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.title}
          title={exp.title}
          link={exp.link}
          role={exp.role}
          location={exp.location}
          dateRange={exp.dateRange}
          highlights={exp.highlights}
          techStack={exp.techStack}
        />
      ))}
    </div>
  );
};

export default Experience;
