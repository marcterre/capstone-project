import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  &:active {
    position: relative;
    top: 1px;
  }

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: var(--color-list-items-white);
      color: var(--color-project-inactive);
      fill: var(--color-project-inactive);
      padding: 0.2em 3em;
    `}

  ${({ variant }) =>
    variant === "submit" &&
    css`
      background-color: var(--color-buttons-yellow);
      padding: 0.2em 3.5em;
    `}
`;
