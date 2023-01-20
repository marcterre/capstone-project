import styled from "styled-components";
import Project from "@/components/Project";

export default function HomePage() {
  return (
    <>
      <header>
        <H1>Your Projects</H1>
      </header>
      <main>
        <Project />
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 0;
`;
