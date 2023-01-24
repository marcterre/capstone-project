import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";

export default function HomePage({ projects }) {
  return (
    <>
      <header>
        <H1>Your Projects</H1>
      </header>
      <main>
        <ProjectItem projects={projects} />
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 0;
  margin: 10px;
`;
