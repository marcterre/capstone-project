import styled from "styled-components";
import { titles } from "../lib/data.json";
import { v4 as uuidv4 } from "uuid";
import ToolsIcon from "../public/tools.svg";

export default function ProjectItem() {
  return (
    <Ul>
      {titles.map((title) => (
        <Li key={uuidv4()}>
          <StyledToolsIcon />
          {title.name}
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
  margin: 10px;
`;

const StyledToolsIcon = styled(ToolsIcon)`
  width: 25px;
  height: 25px;
  position: relative;
`;
