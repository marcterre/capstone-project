import styled from "styled-components";
import ProjectItem from "@/components/ProjectItem";

export default function HomePage({ projects }) {
  return (
    <>
      <header>
        <Title>Your Projects</Title>
      </header>
      <main>
        <ProjectItem projects={projects} />
      </main>
    </>
  );
}

const Title = styled.h1`
  position: relative;
  top: 0;
  margin: 10px;
`;
