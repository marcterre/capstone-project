import styled from "styled-components";
import Link from "next/link";

import ToolsIcon from "../public/tools.svg";

export default function ProjectItem({ projects }) {
  return (
    <List>
      {projects.map((project) => (
        <ListItem key={project.id}>
          <StyledLink
            href={`/project-details/${project.id}`}
            onClick={() => console.log(project.id)}
          >
            <Wrapper>
              <StyledToolsIcon />
              {project.name}
            </Wrapper>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 5vw;
`;

const ListItem = styled.li`
  overflow: hidden;
  margin: 10px 0;
`;

const StyledToolsIcon = styled(ToolsIcon)`
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid black;
`;
