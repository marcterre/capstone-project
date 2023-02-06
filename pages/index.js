import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";

export default function HomePage({ projects }) {
  const filteredActiveProjects = projects.filter((project) => project.isActive);
  const filteredInactiveProjects = projects.filter(
    (project) => !project.isActive
  );

  return (
    <>
      <header>
        <Title>Your Projects</Title>
      </header>
      <main>
        {projects.length < 1 && <p>click + below to add a new project</p>}
        {projects.length > 0 && (
          <>
            <h2>Active projects</h2>
            {filteredActiveProjects.length < 1 && (
              <p>no active projects here</p>
            )}
            {filteredActiveProjects.length > 0 && (
              <ProjectItem projects={filteredActiveProjects} />
            )}
            <h2>Inactive projects</h2>
            {filteredInactiveProjects.length < 1 && (
              <p>no inactive projects here</p>
            )}
            {filteredInactiveProjects.length > 0 && (
              <ProjectItem projects={filteredInactiveProjects} />
            )}
          </>
        )}
      </main>
    </>
  );
}

const Title = styled.h1`
  position: relative;
  top: 0;
  margin: 10px;
`;
