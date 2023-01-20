import { titles } from "../lib/data.json";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ToolsIcon from "../public/tools.svg";

export default function HomePage() {
  return (
    <>
      <header>
        <H1>Your Projects</H1>
      </header>
      <main>
        <ul>
          {titles.map((title) => (
            <li key={uuidv4()}>
              <StyledToolsIcon />
              {title.name}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

const H1 = styled.h1`
  position: relative;
  top: 0;
`;

const StyledToolsIcon = styled(ToolsIcon)`
  width: 30px;
  height: 30px;
`;
