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
            <StyledImage
              src={sketch}
              alt={`here should be a sketch of your view`}
              width="100"
              height="100"
            />
          ) : (
            <NoSketchText>no sketch here</NoSketchText>
          )}
        </TitleWrapper>
      </Header>
      <Main>
        {description ? (
          <DescriptionSection>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{description}</DescriptionText>
          </DescriptionSection>
        ) : null}

        <button type="button" onClick={() => router.back()}>
          go back
        </button>
      </Main>
    </>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const DescriptionText = styled.p`
  overflow: scroll;
  overflow-wrap: break-word;
  padding: 10px;
`;

const DescriptionSection = styled.section`
  height: 20vh;
`;

const Header = styled.header`
  width: 100vw;
  padding-top: 20px;
`;

const Title = styled.h1`
  margin: 10px;
  overflow-wrap: break-word;
  overflow: hidden;
  font-size: 1.5em;
  width: 50vw;
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
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Subtitle = styled.h2`
  margin: 0;
`;
