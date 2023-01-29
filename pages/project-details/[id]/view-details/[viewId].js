import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import DetailsHeader from "@/components/DetailsHeader";

export default function ViewDetails({ currentView, handleDeleteView }) {
  const router = useRouter();

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
      <DetailsHeader
        currentEntry={currentView}
        name={name}
        sketch={sketch}
        entry="view"
        handleDelete={() => handleDeleteView(currentView.id)}
      />
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

const DescriptionText = styled.p`
  overflow: scroll;
  overflow-wrap: break-word;
  padding: 10px;
`;

const DescriptionSection = styled.section`
  height: 20vh;
`;

const Main = styled.main`
  margin: 0 10px;
`;

const Subtitle = styled.h2`
  margin: 0;
`;
