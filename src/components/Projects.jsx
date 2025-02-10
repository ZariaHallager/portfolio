import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <p>
        Each project I’ve worked on demonstrates my passion for crafting dynamic
        and intuitive web experiences. From full-stack applications to front-end
        designs, my projects are built with the latest technologies, focusing on
        performance, scalability, and user-centric features. Explore my work
        below to see how I’ve turned ideas into reality.
      </p>
      <section className='projectsContainer'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
