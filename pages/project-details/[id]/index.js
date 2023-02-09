import styled, { css } from "styled-components";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { projectsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import MaterialList from "@/components/Materiallist";
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledSubtitle } from "@/components/StyledComponents/StyledSubtitle";
import { StyledButton } from "@/components/StyledComponents/StyledButton";
import { Wrapper } from "@/components/StyledComponents/Wrapper";

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

    setStatusUpload("Loading");

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
        <StyledButton
          variant="status"
          type="button"
          onClick={toggleActiveStatus}
          isActive={currentProject.isActive}
        >
          {currentProject.isActive ? "active" : "inactive"}
        </StyledButton>
        {currentProject.categories !== "none" && (
          <CategoryTitle>category: {currentProject.categories}</CategoryTitle>
        )}
      </DetailsHeader>
      <Main>
        {description && (
          <Section>
            <StyledSubtitle>Description</StyledSubtitle>
            <DescriptionText>{description}</DescriptionText>
          </Section>
        )}
        <Wrapper>
          <ButtonTabbar onClick={() => setActiveTabbar(true)}>
            <StyledSubtitle activeTabbar={activeTabbar} variant="views">
              Project views
            </StyledSubtitle>
          </ButtonTabbar>
          <ButtonTabbar onClick={() => setActiveTabbar(false)}>
            <StyledSubtitle activeTabbar={activeTabbar} variant="material">
              Material list
            </StyledSubtitle>
          </ButtonTabbar>
        </Wrapper>
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
  position: relative;
  top: 6.1rem;
  padding: 0 0 1em 0;
  font-size: 0.9em;
  font-weight: 300;
`;

const ButtonTabbar = styled.button`
  background: none;
  border: none;
  padding-bottom: 1em;
  cursor: pointer;
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
  box-shadow: var(--box-shadow-black);
`;
