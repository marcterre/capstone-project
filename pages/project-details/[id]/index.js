import styled from "styled-components";
import Link from "next/link";
import ViewItem from "@/components/ViewItem";
import DetailsHeader from "@/components/DetailsHeader";
import { useAtom } from "jotai";
import { projectsAtom, statusUploadAtom, showEditImageAtom } from "@/lib/atom";

export default function ProjectDetails({
  views,
  currentProject,
  handleDeleteProject,
  handleProjectDetailsChange,
}) {
  const [projects, setProjects] = useAtom(projectsAtom);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const [editImage, setEditImage] = useAtom(showEditImageAtom);

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
      />
      <Main>
        {description ? (
          <DescriptionSection>
            <Subtitle>Description</Subtitle>
            <DescriptionText>{description}</DescriptionText>
          </DescriptionSection>
        ) : null}
        <ViewsSection>
          <Subtitle>Project views</Subtitle>
          <ViewLink href={`/project-details/${currentProject.id}/add-new-view`}>
            add more project views
          </ViewLink>
          <ViewItem
            views={views.filter((view) => view.projectId === currentProject.id)}
            projects={projects}
            currentProject={currentProject}
          />
        </ViewsSection>
      </Main>
    </>
  );
}

const DescriptionText = styled.p`
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 10px;
`;

const ViewsSection = styled.section`
  display: grid;
  gap: 10px;
`;

const DescriptionSection = styled.section`
  display: grid;
`;

const Subtitle = styled.h2`
  margin: 0;
`;

const Main = styled.main`
  margin: 0 10px;
`;

const ViewLink = styled(Link)`
  background-color: lightgrey;
  text-decoration: none;
  color: black;
  padding: 10px;
`;
