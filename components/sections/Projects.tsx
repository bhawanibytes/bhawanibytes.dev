import { ProjectCard } from "../ProjectCard";
import { projectsList } from "@constants";

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      {projectsList
        .slice(0, 3)
        .map(({ title, description, githubLink, image, liveLink, tech }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            image={image}
            tech={tech}
            githubLink={githubLink}
            liveLink={liveLink}
          />
        ))}
    </div>
  );
};

export default Projects;
