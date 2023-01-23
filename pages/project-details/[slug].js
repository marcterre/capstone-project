import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { myProjectsContext } from "../_app";
import { useContext } from "react";

export default function ProjectDetails() {
  const globalProjects = useContext(myProjectsContext);

  const router = useRouter();
  const { slug } = router.query;

  const currentProject = globalProjects.find(
    (project) => project.slug === slug
  );

  if (!currentProject) {
    return <h1>404</h1>;
  }

  const { projectName, projectDescription, projectSketch } = currentProject;

  return (
    <>
      <Header>
        <H1>{projectName}</H1>
      </Header>
      <Main>
        <section>
          <h2>Description</h2>
          <p>{projectDescription}</p>
        </section>
        <SketchSection>
          <h2>Your sketch</h2>
          <Image
            src={projectSketch}
            alt="Example picture of a table"
            width="150"
            height="auto"
          ></Image>
        </SketchSection>
        <Button type="button" onClick={() => router.push("/")}>
          Go back
        </Button>
      </Main>
    </>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0px;
`;

const H1 = styled.h1`
  margin: 10px;
`;

const Main = styled.main`
  margin: 70px 10px;
  position: relative;
`;

const Button = styled.button`
  position: fixed;
  bottom: 100px;
  left: 20px;
`;

const SketchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
