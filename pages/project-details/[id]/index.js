import styled from "styled-components";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DetailsHeader from "@/components/DetailsHeader";
import MaterialList from "@/components/Materiallist";
import { useAtom } from "jotai";
import { projectsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Subtitle,
  StyledButton,
  Wrapper,
  StyledText,
  StyledLink,
} from "@/components/StyledComponents";

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
          <Subtitle variant="categories">
            category: {currentProject.categories}
          </Subtitle>
        )}
      </DetailsHeader>
      <Main>
        {description && (
          <>
            <Subtitle>Description</Subtitle>
            <StyledText>{description}</StyledText>
          </>
        )}
        <Wrapper>
          <StyledButton variant="tabBar" onClick={() => setActiveTabbar(true)}>
            <Subtitle activeTabbar={activeTabbar} variant="views">
              Project views
            </Subtitle>
          </StyledButton>
          <StyledButton variant="tabBar" onClick={() => setActiveTabbar(false)}>
            <Subtitle activeTabbar={activeTabbar} variant="material">
              Material list
            </Subtitle>
          </StyledButton>
        </Wrapper>
        {activeTabbar && (
          <Section>
            <StyledLink
              variant="addView"
              href={`/project-details/${currentProject.id}/add-new-view`}
            >
              add more project views
            </StyledLink>
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

const Section = styled.section`
  display: grid;
`;

const Main = styled.main`
  padding: 0 1em;
`;
