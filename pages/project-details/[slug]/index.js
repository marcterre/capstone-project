import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";

export default function ProjectDetails({ views, projects, currentProject }) {
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
        <Title>{currentProject.name}</Title>
      </Header>
      <Main>
        <section>
          <h2>Description</h2>
          <p>{currentProject.description}</p>
        </section>
        <SketchSection>
          <h2>Your sketch</h2>
          {currentProject.sketch ? (
            <Image
              src={currentProject.sketch}
              alt="here should be a sketch of your project"
              width="150"
              height="150"
            ></Image>
          ) : (
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </SketchSection>
        <section>
          <h2>Views</h2>
          <ViewLink href="/project-details/add-new-view">
            add more views
          </ViewLink>
          <ViewItem
            views={views}
            projects={projects}
            currentProject={currentProject}
          />
        </section>
      </Main>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0px;
`;

const Title = styled.h1`
  margin: 10px;
`;

const Main = styled.main`
  margin: 70px 10px;
  position: relative;
`;

const SketchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ViewLink = styled(Link)`
  background-color: lightgrey;
  text-decoration: none;
  color: black;
  padding: 10px;
`;

const NoSketchText = styled.p`
  border: 1px solid black;
  width: 150px;
  padding: 5px;
  text-align: center;
`;
