import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

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
`;
