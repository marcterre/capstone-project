import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:active {
    position: relative;
    top: 1px;
  }

  ${({ variant }) =>
    variant === "home" &&
    css`
      display: flex;
      width: 2.8em;
      border-radius: 50%;
      background-color: ${({ isfocused }) =>
        isfocused === "/"
          ? "var( --color-background)"
          : "var(--color-buttons-yellow)"};
    `}

  ${({ variant }) =>
    variant === "plus" &&
    css`
      display: flex;
      width: 2.8em;
      border-radius: 50%;
      background-color: ${({ isfocused }) =>
        isfocused === "/create-new-project"
          ? "var( --color-background)"
          : "var(--color-buttons-yellow)"};
    `}

    ${({ variant }) =>
    variant === "addView" &&
    css`
      background-color: var(--color-buttons-yellow);
      border-radius: 2em;
      padding: 0.5em;
      text-align: center;
      box-shadow: var(--box-shadow-black);
    `}
`;
