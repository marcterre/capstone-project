import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ variant }) =>
    variant === "outermost" &&
    css`
      padding: 0 0.5em;
    `}

  ${({ variant }) =>
    variant === "listItem" &&
    css`
      padding: 0 0.5em;
      text-overflow: ellipsis;
      overflow: hidden;
    `}

    ${({ variant }) =>
    variant === "sublist" &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
    `}

  ${({ variant }) =>
    variant === "viewSublist" &&
    css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5em 0;
    `}
`;
