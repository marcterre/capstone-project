import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { viewsAtom } from "@/lib/atom";

export default function ViewDetails({
  currentView,
  handleDeleteView,
  handleViewDetailsChange,
}) {
  const router = useRouter();
  const [views, setViews] = useAtom(viewsAtom);

  if (!currentView) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  async function handleImageChangeViews(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });

    const imageData = await response.json();

    const newImage = {
      id: imageData.public_id,
      url: imageData.secure_url,
      width: imageData.width,
      height: imageData.height,
      alt: "",
    };

    setViews(
      views.map((view) =>
        view.image.id === currentView.image.id
          ? { ...view, image: { ...newImage } }
          : { ...view }
      )
    );
  }

  const { name, description, image } = currentView;

  return (
    <>
      <DetailsHeader
        currentEntry={currentView}
        name={name}
        image={image}
        entry="view"
        handleDelete={() => handleDeleteView(currentView.id)}
        handleDetailsChanges={handleViewDetailsChange}
        handleImageChange={handleImageChangeViews}
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
