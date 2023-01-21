import { useRouter } from "next/router";
import styled from "styled-components";
import Example from "@/public/Example.png";
import Image from "next/image";

export default function ProjectDetails() {
  const router = useRouter();

  return (
    <>
      <Header>
        <H1>Project 1</H1>
      </Header>
      <Main>
        <section>
          <h2>Description</h2>
          <p>Lorem ipsum...</p>
        </section>
        <SketchSection>
          <h2>Your sketch</h2>
          <Image
            src={Example}
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
  bottom: 20px;
  left: 20px;
`;

const SketchSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
