import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DeleteButton from "@/components/DeleteButton";
import SettingsButton from "@/components/SettingsButton";
import { useState } from "react";

export default function ProjectDetails({
  views,
  projects,
  currentProject,
  setProjects,
}) {
  const [popUpSettings, setPopUpSettings] = useState(false);

  if (!currentProject) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  return (
    <>
      <Header>
        <TitleWrapper>
          <Title>{currentProject.name}</Title>
          {currentProject.sketch ? (
            <StyledImage
              src={currentProject.sketch}
              alt={`here should be a sketch of your project`}
              width="100"
              height="100"
            />
          ) : (
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </TitleWrapper>
        <SettingsWrapper>
          <SettingsButton
            handlePopUp={() => setPopUpSettings(!popUpSettings)}
          />
          {popUpSettings ? <DeleteButton /> : null}
        </SettingsWrapper>
      </Header>
      <Main>
        {currentProject.description ? (
          <DescriptionSection>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{currentProject.description}</DescriptionText>
          </DescriptionSection>
        ) : null}
        <section>
          <h2>Views</h2>
          <ViewLink href={`/project-details/${currentProject.id}/add-new-view`}>
            add more views
          </ViewLink>
          <ViewItem
            views={views.filter((view) => view.projectId === currentProject.id)}
            projects={projects}
            currentProject={currentProject}
          />
        </section>
      </Main>
    </>
  );
}

const SettingsWrapper = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px 10px 0 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const DescriptionText = styled.p`
  overflow: scroll;
  overflow-wrap: break-word;
  padding: 10px;
`;

const DescriptionSection = styled.section`
  height: 20vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  order: 1;
`;

const Header = styled.header`
  width: 100vw;
  display: grid;
`;

const Title = styled.h1`
  margin: 10px;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 1.5em;
  width: 50vw;
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

const NoSketchText = styled.p`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  padding: 5px;
  text-align: center;
`;
