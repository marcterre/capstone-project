import { useRouter } from "next/router";
import styled from "styled-components";

export default function ProjectDetails() {
  const router = useRouter();

  return (
    <>
      <header>
        <H1>Project 1</H1>
      </header>
      <Main>
        <section>
          <h2>Description</h2>
          <p>Lorem ipsum...</p>
        </section>
        <section>
          <h2>Your sketch</h2>
        </section>
        <button type="button" onClick={() => router.push("/")}>
          Go back
        </button>
      </Main>
    </>
  );
}

const H1 = styled.h1`
  margin: 10px;
`;

const Main = styled.main`
  margin: 0px 10px;
`;
