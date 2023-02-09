import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ variant }) =>
    variant === "viewListItem" &&
    css`
      background-color: lightgray;
      padding: 10px;
      white-space: wrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 40vw;
      display: flex;
      align-items: center;
      gap: 0.2em;
    `}

  ${({ variant }) =>
    variant === "views-outermost" &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
    `}

    ${({ variant }) =>
    variant === "project-outermost" &&
    css`
      padding: 0 0.5em;
    `}

    ${({ variant }) =>
    variant === "projectListItem" &&
    css`
      padding: 0 0.5em;
      text-overflow: ellipsis;
      overflow: hidden;
    `}

    ${({ variant }) =>
    variant === "projectSublist" &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
    `}
`;
