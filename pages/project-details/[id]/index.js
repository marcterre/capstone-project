import styled from "styled-components";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { projectsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import MaterialList from "@/components/Materiallist";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProjectDetails({
  views,
  currentProject,
  handleDeleteProject,
  handleProjectDetailsChange,
}) {
  const router = useRouter();
  const { id } = router.query;

  const [projects, setProjects] = useAtom(projectsAtom);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const [editImage, setEditImage] = useAtom(showEditImageAtom);
  const [activeTabbar, setActiveTabbar] = useState(true);

  if (!currentProject) {
    return (
      <>
        <h1>404</h1>
        <Link href="/">Go back to your projects</Link>
      </>
    );
  }

  function handleDeleteImageProjects(id) {
    setProjects(
      projects.map((project) =>
        project.image.id === id
          ? {
              ...project,
              image: [project.image].filter((image) => image.id !== id),
            }
          : project
      )
    );
  }

  async function handleImageChangeProjects(event) {
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

    setProjects(() =>
      projects.map((project) =>
        project.image.id === currentProject.image.id
          ? { ...project, image: { ...newImage } }
          : { ...project }
      )
    );

    setStatusUpload("");
    setEditImage(false);
  }

  function addNewMaterialProject(newDimension) {
    setProjects(
      projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            dimensions: [...project.dimensions, newDimension],
          };
        } else {
          return project;
        }
      })
    );
  }

  function handleMateriallistDeleteProjects(id) {
    setProjects(
      projects.map((project) => {
        if (project.id === currentProject.id) {
          return {
            ...project,
            dimensions: project.dimensions.filter(
              (dimension) => dimension.id !== id
            ),
          };
        } else {
          return project;
        }
      })
    );
  }

  function toggleActiveStatus() {
    setProjects(
      projects.map((project) => {
        if (project.id === currentProject.id) {
          return {
            ...project,
            isActive: !project.isActive,
          };
        } else {
          return project;
        }
      })
    );
  }

  const { name, description, image } = currentProject;

  return (
    <>
      <DetailsHeader
        name={name}
        image={image}
        handleDelete={() => handleDeleteProject(currentProject.id)}
        entry="project"
        currentEntry={currentProject}
        handleDetailsChanges={handleProjectDetailsChange}
        handleImageChange={handleImageChangeProjects}
        handleDeleteImage={() =>
          handleDeleteImageProjects(currentProject.image.id)
        }
      >
        <Button
          type="button"
          onClick={toggleActiveStatus}
          isActive={currentProject.isActive}
        >
          {currentProject.isActive ? "active" : "inactive"}
        </Button>
        {currentProject.categories !== "none" && (
          <CategoryTitle>category: {currentProject.categories}</CategoryTitle>
        )}
      </DetailsHeader>
      <Main>
        {description && (
          <Section>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{description}</DescriptionText>
          </Section>
        )}
        <ButtonWrapper>
          <ButtonTabbar onClick={() => setActiveTabbar(true)}>
            <TitleProjectViews activeTabbar={activeTabbar}>
              Project views
            </TitleProjectViews>
          </ButtonTabbar>
          <ButtonTabbar onClick={() => setActiveTabbar(false)}>
            <TitleMaterialList activeTabbar={activeTabbar}>
              Material list
            </TitleMaterialList>
          </ButtonTabbar>
        </ButtonWrapper>
        {activeTabbar && (
          <Section>
            <ViewLink
              href={`/project-details/${currentProject.id}/add-new-view`}
            >
              add more project views
            </ViewLink>
            <ViewItem
              views={views.filter(
                (view) => view.projectId === currentProject.id
              )}
              projects={projects}
              currentProject={currentProject}
            />
          </Section>
        )}
        {!activeTabbar && (
          <MaterialList
            addNewMaterial={addNewMaterialProject}
            currentEntry={currentProject}
            entries={projects}
            handleMateriallistDelete={handleMateriallistDeleteProjects}
          />
        )}
      </Main>
    </>
  );
}

const CategoryTitle = styled.p`
  grid-column: 1 / span 2;
  margin: 0;
  padding: 0 0 1em 0;
  font-size: 0.9em;
  font-weight: 300;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonTabbar = styled.button`
  background: none;
  border: none;
  padding-bottom: 1em;
  cursor: pointer;
`;

const Button = styled.button`
  grid-row: 2;
  grid-column: 3;
  justify-self: flex-end;
  align-self: flex-start;
  width: 5rem;
  padding: 0.5em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  text-shadow: 1px 1px black;
  color: var(--color-list-items-white);
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-status-active)" : "var(--color-status-inactive)"};
`;

const DescriptionText = styled.p`
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 0 0.5em 0.5em 0.5em;
  margin: 0;
`;

const Section = styled.section`
  display: grid;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0 0 0.4em 0;
`;

const TitleProjectViews = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0;
  border-bottom: ${({ activeTabbar }) => activeTabbar && "0.2em solid black"};
`;
const TitleMaterialList = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0;
  border-bottom: ${({ activeTabbar }) => !activeTabbar && "0.2em solid black"};
`;

const Main = styled.main`
  margin: 0;
  padding: 0 1em;
`;

const ViewLink = styled(Link)`
  background-color: var(--color-buttons-yellow);
  text-decoration: none;
  border-radius: 2em;
  color: black;
  padding: 0.5em;
  text-align: center;
`;
