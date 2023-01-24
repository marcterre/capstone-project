import styled from "styled-components";
import Link from "next/link";
import { myProjectsContext } from "@/pages/_app";
import { useContext } from "react";

import ToolsIcon from "../public/tools.svg";

export default function ProjectItem() {
  const globalProjects = useContext(myProjectsContext);

  return (
    <Ul>
      {globalProjects.map((project) => (
        <Li key={project.id}>
          <Link href={`/project-details/${project.slug}`}>
            <div>
              <StyledToolsIcon />
              {project.name}
            </div>
          </Link>
        </Li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  border: 1px solid black;
  width: 80vw;
  margin: 10px 0;
`;

const StyledToolsIcon = styled(ToolsIcon)`
  width: 25px;
  height: 25px;
`;
