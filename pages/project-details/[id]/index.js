import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import { useRouter } from "next/router";

export default function ProjectDetails({ views, projects }) {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = projects.find((project) => project.id === id);

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
            <Image
              src={currentProject.sketch}
              alt={`here should be a sketch of ${currentProject.sketch}`}
              width="100"
              height="100"
            />
          ) : (
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </TitleWrapper>
      </Header>
      <Main>
        {currentProject.description ? (
          <section>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{currentProject.description}</DescriptionText>
          </section>
        ) : null}
        <section>
          <h2>Views</h2>
          <ViewLink href="/project-details/add-new-view">
            add more views
          </ViewLink>
          <ViewItem
            // views={views.filter((view) => view.projectId === currentProject.id)}
            views={views}
            projects={projects}
            currentProject={currentProject}
          />
        </section>
      </Main>
    </>
  );
}

const DescriptionText = styled.p`
  overflow: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Header = styled.header`
  width: 100vw;
  display: grid;
`;

const Title = styled.h1`
  margin: 10px;
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
