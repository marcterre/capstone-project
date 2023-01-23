import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";
import { myProjectsContext } from "@/pages/_app";
import { useContext } from "react";

export default function HomePage() {
  const currentProject = useContext(myProjectsContext);

  console.log(currentProject);

  return (
    <>
      <header>
        <H1>Your Projects</H1>
      </header>
      <main>
        <ProjectItem />
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
