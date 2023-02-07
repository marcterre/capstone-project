import styled from "styled-components";
import { useAtom } from "jotai";
import { projectsAtom } from "@/lib/atom";

export default function ActiveStatus({ currentProject }) {
  const [projects, setProjects] = useAtom(projectsAtom);

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

  return (
    <Button
      type="button"
      onClick={toggleActiveStatus}
      isActive={currentProject.isActive}
    >
      {currentProject.isActive ? "active" : "inactive"}
    </Button>
  );
}

const Button = styled.button`
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "lightgreen" : "red")};
`;
