import styled, { css } from "styled-components";

export const Subtitle = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0.7em 0;
  font-size: 1.5em;
  position: relative;

  ${({ variant }) =>
    variant === "views" &&
    css`
      border-bottom: ${({ activeTabbar }) =>
        activeTabbar && "0.2em solid black"};
      padding-bottom: 0.2em;
    `}

  ${({ variant }) =>
    variant === "material" &&
    css`
      border-bottom: ${({ activeTabbar }) =>
        !activeTabbar && "0.2em solid black"};
      padding-bottom: 0.2em;
    `}

    ${({ variant }) =>
    variant === "categories" &&
    css`
      grid-column: 1 / span 2;
      margin: 0;
      top: 6.1rem;
      padding: 0 0 1em 0;
      font-size: 0.9em;
      font-weight: 300;
    `}
`;
