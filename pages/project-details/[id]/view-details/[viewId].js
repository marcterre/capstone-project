import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ViewDetails({ views }) {
  const router = useRouter();
  const { viewId } = router.query;

  const currentView = views.find((view) => view.viewId === viewId);

  if (!currentView) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  const { name, description, sketch } = currentView;

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
        <button type="button" onClick={() => router.back()}>
          go back
        </button>
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

const NoSketchText = styled.p`
  border: 1px solid black;
  width: 150px;
  padding: 5px;
  text-align: center;
`;
