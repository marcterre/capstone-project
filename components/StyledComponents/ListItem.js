import styled, { css } from "styled-components";

export const ListItem = styled.li`
  background-color: var(--color-list-items-white);
  border-radius: 2em;
  box-shadow: var(--box-shadow-darkblue);

  ${({ variant }) =>
    variant === "mainListItem" &&
    css`
      margin: 1em 0;
    `}

  ${({ variant }) =>
    variant === "viewListItem" &&
    css`
      padding: 1em 0;
      justify-self: center;
    `}
`;
