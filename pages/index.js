import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";
import Logo from "@/assets/logo.svg";

export default function HomePage({ projects, currentProject }) {
  const filteredActiveProjects = projects.filter((project) => project.isActive);
  const filteredInactiveProjects = projects.filter(
    (project) => !project.isActive
  );

  return (
    <>
      <header>
        <StyledLogo aria-label="Logo PocketBuilder" />
      </header>
      <main>
        {projects.length < 1 && (
          <StatusText>click + below to add a new project</StatusText>
        )}
        {projects.length > 0 && (
          <>
            <Subtitle>Active projects</Subtitle>
            {filteredActiveProjects.length < 1 && (
              <StatusText>No active projects here.</StatusText>
            )}
            {filteredActiveProjects.length > 0 && (
              <ProjectItem
                projects={filteredActiveProjects}
                currentProject={currentProject}
              />
            )}
            <Subtitle>Inactive projects</Subtitle>
            {filteredInactiveProjects.length < 1 && (
              <StatusText>No inactive projects here.</StatusText>
            )}
            {filteredInactiveProjects.length > 0 && (
              <ProjectItem
                projects={filteredInactiveProjects}
                currentProject={currentProject}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}

const StyledLogo = styled(Logo)`
  width: 100vw;
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 2em 0 0.2em 0.5em;
  font-size: 1.3em;
`;

const StatusText = styled.p`
  padding: 0 1em;
  &:first-of-type {
    text-align: center;
  }
`;
