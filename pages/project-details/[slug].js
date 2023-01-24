import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { myProjectsContext } from "../_app";
import { useContext } from "react";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";

export default function ProjectDetails() {
  const globalProjects = useContext(myProjectsContext);

  const router = useRouter();
  const { slug } = router.query;

  const currentProject = globalProjects.find(
    (project) => project.slug === slug
  );

  if (!currentProject) {
    return (
      <>
        <h1>404</h1>
        <Link src="/">Go back to your projects</Link>;
      </>
    );
  }

  const { name, description, sketch } = currentProject;

  return (
    <>
      <Header>
        <Title>{name}</Title>
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
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </SketchSection>
        <section>
          <h2>Views</h2>
          <ViewLink href="/project-details/add-new-view">
            add more views
          </ViewLink>
          <ViewItem />
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
