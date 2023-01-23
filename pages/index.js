import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";
import { myProjectsContext } from "@/pages/_app";
import { useContext } from "react";

export default function HomePage() {
  const currentProject = useContext(myProjectsContext);

  return (
    <>
      <header>
        <H1>Your Projects</H1>
      </header>
      <main>
        {currentProject ? (
          <EmptyProjectPage>
            Click + in ne navigation below to create a new project
          </EmptyProjectPage>
        ) : (
          <ProjectItem />
        )}
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 0;
  margin: 10px;
`;

const EmptyProjectPage = styled.p`
  padding: 10px;
  text-align: center;
`;
