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
        <TitleWrapper>
          <Title>{name}</Title>
          {sketch ? (
            <Image
              src={sketch}
              alt={`here should be a sketch of ${name}`}
              width="100"
              height="100"
            ></Image>
          ) : (
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </TitleWrapper>
      </Header>
      <Main>
        <section>
          <Subtitle>Description</Subtitle>
          <p>{description}</p>
        </section>
        <button type="button" onClick={() => router.back()}>
          go back
        </button>
      </Main>
    </>
  );
}

const Header = styled.header`
  width: 100vw;
  display: grid;
`;

const Title = styled.h1`
  margin: 10px;
`;

const Main = styled.main`
  margin: 0 10px;
`;

const NoSketchText = styled.p`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  padding: 5px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Subtitle = styled.h2`
  margin: 0;
`;
