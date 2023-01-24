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

  const { name, description, sketch } = currentProject;

  return (
    <>
      <Header>
        <H1>{name}</H1>
      </Header>
      <Main>
        <section>
          <h2>Description</h2>
          <p>{description}</p>
        </section>
        <SketchSection>
          <h2>Your sketch</h2>
          {sketch ? (
            <Image
              src={sketch}
              alt="here should be a sketch of your project"
              width="150"
              height="150"
            ></Image>
          ) : (
            <p>no sketch here</p>
          )}
        </SketchSection>
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

const SketchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledImage = styled(Image)`
  border: 1px solid black;
`;
