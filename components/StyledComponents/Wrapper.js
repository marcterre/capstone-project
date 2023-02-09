import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  ${({ variant }) =>
    variant === "button" &&
    css`
      justify-self: end;
      width: 100%;
      padding: 0.3em;
    `}

  ${({ variant }) =>
    variant === "settings" &&
    css`
      gap: 0.5em;
    `}

    ${({ variant }) =>
    variant === "formSubmit" &&
    css`
      justify-content: space-evenly;
      align-self: center;
    `}

    ${({ variant }) =>
    variant === "formButtons" &&
    css`
      gap: 1em;
      position: relative;
      top: 3em;
    `}

    ${({ variant }) =>
    variant === "grid" &&
    css`
      display: grid;
      justify-content: stretch;
    `}
`;
