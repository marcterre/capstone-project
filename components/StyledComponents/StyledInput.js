import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  background-color: var(--color-list-items-white);
  border: none;
  border-radius: 2em;
  padding: 0.7em;
  box-shadow: var(--box-shadow-darkblue);

  ${({ variant }) =>
    variant === "file" &&
    css`
      background: none;
      font-size: 0.9em;
      box-shadow: none;
    `}
`;
