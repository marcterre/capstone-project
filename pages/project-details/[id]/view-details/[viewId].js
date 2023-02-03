import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { viewsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import MaterialList from "@/components/Materiallist";

export default function ViewDetails({
  currentView,
  handleDeleteView,
  handleViewDetailsChange,
}) {
  const router = useRouter();
  const { viewId } = router.query;
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

  function addNewMaterialView(newDimension) {
    setViews(
      views.map((view) => {
        if (view.id === viewId) {
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

  function handleMateriallistDeleteViews(id) {
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
        {currentView.dimensions ? (
          <MaterialList
            addNewMaterial={addNewMaterialView}
            currentEntry={currentView}
            entries={views}
            handleMateriallistDelete={handleMateriallistDeleteViews}
          />
        ) : null}
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
