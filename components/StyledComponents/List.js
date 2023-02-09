import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ variant }) =>
    variant === "viewListItem" &&
    css`
      padding: 0 0.5em;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 40vw;
      display: flex;
      align-items: center;
      gap: 0.2em;
    `}

  ${({ variant }) =>
    variant === "viewsOutermost" &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    `}

    ${({ variant }) =>
    variant === "projectOutermost" &&
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

    ${({ variant }) =>
    variant === "icon" &&
    css`
      width: 1.5em;
      height: 1.5em;
    `}
`;
