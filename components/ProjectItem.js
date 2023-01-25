import styled from "styled-components";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import ToolsIcon from "../public/tools.svg";

export default function ProjectItem({ projects }) {
  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <Link
            href={`/project-details/${project.id}`}
            onClick={() => console.log(project.id)}
          >
            <div>
              <StyledToolsIcon />
              {project.name}
            </div>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  border: 1px solid black;
  width: 80vw;
  margin: 10px 0;
`;

const StyledToolsIcon = styled(ToolsIcon)`
  width: 25px;
  height: 25px;
`;
