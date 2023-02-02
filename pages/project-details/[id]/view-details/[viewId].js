import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { viewsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import Materiallist from "@/components/Materiallist";

export default function ViewDetails({
  currentView,
  handleDeleteView,
  handleViewDetailsChange,
}) {
  const router = useRouter();
  const [views, setViews] = useAtom(viewsAtom);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const [editImage, setEditImage] = useAtom(showEditImageAtom);

  if (!currentView) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  function handleDeleteImageViews(id) {
    setViews(
      views.map((view) =>
        view.image.id === id
          ? {
              ...view,
              image: [view.image].filter((image) => image.id !== id),
            }
          : view
      )
    );
  }

  async function handleImageChangeViews(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    setStatusUpload("Loading...");

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

    setStatusUpload("");
    setEditImage(false);
  }

  function addNewDimensionView(id, newDimension) {
    setViews(
      views.map((view) => {
        if (view.id === id) {
          return {
            ...view,
            dimensions: [...view.dimensions, newDimension],
          };
        } else {
          return view;
        }
      })
    );
  }

  function handleDimensionDeleteViews(id) {
    setViews(
      views.map((view) => {
        if (view.id === currentView.id) {
          return {
            ...view,
            dimensions: view.dimensions.filter(
              (dimension) => dimension.id !== id
            ),
          };
        } else {
          return view;
        }
      })
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
        handleDeleteImage={() => handleDeleteImageViews(currentView.image.id)}
      />
      <Main>
        {description ? (
          <DescriptionSection>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{description}</DescriptionText>
          </DescriptionSection>
        ) : null}
        <Materiallist
          addNewDimension={addNewDimensionView}
          projectId={currentView.id}
          currentEntry={currentView}
          entries={views}
          handleDimensionDelete={handleDimensionDeleteViews}
        />
        <Button type="button" onClick={() => router.back()}>
          go back
        </Button>
      </Main>
    </>
  );
}

const Button = styled.button`
  position: fixed;
  right: 1em;
  bottom: 5em;
  padding: 1em;
`;

const DescriptionText = styled.p`
  overflow: scroll;
  overflow-wrap: break-word;
  padding: 10px;
`;

const DescriptionSection = styled.section`
  height: auto;
`;

const Main = styled.main`
  margin: 0 10px;
`;

const Subtitle = styled.h2`
  margin: 0;
`;
