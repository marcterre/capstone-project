import styled, { css } from "styled-components";

export const Subtitle = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0.7em 0;
  font-size: 1.5em;

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
`;
