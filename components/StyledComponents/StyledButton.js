import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin: 0;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  box-shadow: var(--box-shadow-black);
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
      padding: 0.2em 2em;
      font-size: 1em;
    `}

  ${({ variant }) =>
    variant === "submit" &&
    css`
      background-color: var(--color-buttons-yellow);
      padding: 0.2em 2.5em;
      font-size: 1em;
    `}

    ${({ variant }) =>
    variant === "settings" &&
    css`
      width: 2.7em;
      height: 2.7em;
      background-color: var(--color-buttons-yellow);
      fill: var(--color-icons-filling-black);
      border-radius: 50%;
    `}

    ${({ variant }) =>
    variant === "status" &&
    css`
      position: relative;
      top: 6rem;
      right: 1.5em;
      grid-row: 2;
      grid-column: 3;
      justify-self: flex-end;
      align-self: flex-start;
      width: 5rem;
      padding: 0.5em;
      text-shadow: 1px 1px black;
      color: var(--color-list-items-white);
      background-color: ${({ isActive }) =>
        isActive
          ? "var(--color-status-active)"
          : "var(--color-status-inactive)"};
      &:active {
        top: 7em;
      }
    `}

    ${({ variant }) =>
    variant === "image" &&
    css`
      width: 3.8em;
      height: 3.5em;
      top: 6.6em;
      left: 24.4em;
      border-radius: 2em 0;
      box-shadow: none;
      background-color: var(--color-background);
      &:active {
        top: 6.7em;
      }
    `}
`;
