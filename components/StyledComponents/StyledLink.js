import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  &:active {
    position: relative;
    top: 1px;
  }

  ${({ variant }) =>
    variant === "home" &&
    css`
      background-color: ${({ isfocused }) =>
        isfocused === "/"
          ? "var( --color-background)"
          : "var(--color-buttons-yellow)"};
    `}

  ${({ variant }) =>
    variant === "plus" &&
    css`
      background-color: ${({ isfocused }) =>
        isfocused === "/create-new-project"
          ? "var( --color-background)"
          : "var(--color-buttons-yellow)"};
    `}
`;
