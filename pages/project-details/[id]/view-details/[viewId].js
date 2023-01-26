import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import DetailsHeader from "@/components/Header";

export default function ViewDetails({ views, setViews }) {
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
      <DetailsHeader
        name={name}
        sketch={sketch}
        setEntries={setViews}
        currentId={currentView.id}
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
