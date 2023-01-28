import styled from "styled-components";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DetailsHeader from "@/components/DetailsHeader";

export default function ProjectDetails({
  views,
  projects,
  currentProject,
  handleDeleteProject,
}) {
  if (!currentProject) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  const { name, description, sketch } = currentProject;

  return (
    <>
      <DetailsHeader
        name={name}
        sketch={sketch}
        handleDelete={() => handleDeleteProject(currentProject.id)}
        entry="project"
      />
      <Main>
        {description ? (
          <DescriptionSection>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{description}</DescriptionText>
          </DescriptionSection>
        ) : null}
        <ViewsSection>
          <Subtitle>Views</Subtitle>
          <ViewLink href={`/project-details/${currentProject.id}/add-new-view`}>
            add more views
          </ViewLink>
          <ViewItem
            views={views.filter((view) => view.projectId === currentProject.id)}
            projects={projects}
            currentProject={currentProject}
          />
        </ViewsSection>
      </Main>
    </>
  );
}

const DescriptionText = styled.p`
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 10px;
`;

const ViewsSection = styled.section`
  display: grid;
  gap: 10px;
`;

const DescriptionSection = styled.section`
  display: grid;
`;

const Subtitle = styled.h2`
  margin: 0;
`;

const Main = styled.main`
  margin: 0 10px;
`;

const ViewLink = styled(Link)`
  background-color: lightgrey;
  text-decoration: none;
  color: black;
  padding: 10px;
`;
