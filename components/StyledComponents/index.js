import styled, { css } from "styled-components";
import Link from "next/link";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${({ variant }) =>
    variant === "outermost" &&
    css`
      padding: 0 0.5em;
    `}

  ${({ variant }) =>
    variant === "listItem" &&
    css`
      padding: 0 0.5em;
      text-overflow: ellipsis;
      overflow: hidden;
    `}

    ${({ variant }) =>
    variant === "sublist" &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5em 1em;
    `}

  ${({ variant }) =>
    variant === "viewSublist" &&
    css`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5em 0;
    `}
`;

export const ListItem = styled.li`
  background-color: var(--color-list-items-white);
  border-radius: 1em;
  box-shadow: var(--box-shadow-darkblue);

  ${({ variant }) =>
    variant === "mainListItem" &&
    css`
      margin: 1em 0;
    `}

  ${({ variant }) =>
    variant === "icon" &&
    css`
      width: 1.5em;
      height: 1.5em;
      box-shadow: none;
    `}
`;

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: none;
  border-radius: 1em;
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
      padding: 0.2em 2em;
      border-radius: 0.5em;
      font-size: 1em;
    `}

  ${({ variant }) =>
    variant === "submit" &&
    css`
      background-color: var(--color-buttons);
      padding: 0.2em 2.5em;
      border-radius: 0.5em;
      font-size: 1em;
    `}

    ${({ variant }) =>
    variant === "settings" &&
    css`
      width: 2.5em;
      height: 2.5em;
      background-color: var(--color-buttons);
      fill: var(--color-icons-filling-black);
      border-radius: 50%;
    `}

    ${({ variant }) =>
    variant === "status" &&
    css`
      border-radius: 0.3em;
      grid-column: 1 / span 2;
      background: none;
      width: 100%;
      height: 40%;
      padding: 0.8em;
      box-shadow: none;
      color: ${({ isActive }) =>
        isActive
          ? "var(--color-status-active)"
          : "var(--color-status-inactive)"};
      border: ${({ isActive }) =>
        isActive
          ? "0.1em solid var(--color-status-active)"
          : "0.1em solid var(--color-status-inactive)"};
      &:active {
        top: 1px;
      }
    `}

    ${({ variant }) =>
    variant === "image" &&
    css`
      top: -2.5em;
      right: -6em;
      width: 2.5em;
      height: 2.5em;
      border-radius: 2em;
      background-color: rgb(250, 250, 250);
      &:active {
        top: -2.4em;
      }
    `}

    ${({ variant }) =>
    variant === "tabBar" &&
    css`
      padding-bottom: 1em;
      background: none;
      box-shadow: none;
    `}

    ${({ variant }) =>
    variant === "close" &&
    css`
      width: 2.7em;
      height: 2.7em;
      background-color: var(--color-list-items-white);
      fill: var(--color-project-inactive);
      outline: rgb(0, 0, 0, 0.2) solid 0.2em;
      align-self: center;
      border-radius: 50%;
    `}
`;

export const StyledInput = styled.input`
  background-color: var(--color-list-items-white);
  border: none;
  border-radius: 1em;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  ${({ variant }) =>
    variant === "home" &&
    css`
      display: flex;
      width: 2.8em;
      border-radius: 50%;
      ${({ isfocused }) =>
        isfocused === "/" &&
        css`
          position: relative;
          top: -0.5em;
          background-color: var(--color-buttons);
        `};
    `}

  ${({ variant }) =>
    variant === "plus" &&
    css`
      display: flex;
      width: 2.8em;
      border-radius: 50%;
      ${({ isfocused }) =>
        isfocused === "/create-new-project" &&
        css`
          position: relative;
          top: -0.5em;
          background-color: var(--color-buttons);
        `};
    `}

    ${({ variant }) =>
    variant === "addView" &&
    css`
      background-color: var(--color-buttons);
      border-radius: 0.8em;
      padding: 0.3em;
      text-align: center;
      box-shadow: var(--box-shadow-black);
    `}
`;

export const StyledText = styled.p`
  overflow: hidden;
  overflow-wrap: break-word;
  padding: 0 0.5em 0.5em 0.5em;
  margin: 0;
`;

export const StyledTextarea = styled.textarea`
  min-height: 10vh;
  padding: 1em;
  resize: none;
  background-color: var(--color-list-items-white);
  border: none;
  border-radius: 1em;
  padding: 0.7em;
  box-shadow: var(--box-shadow-darkblue);
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0.7em 0;
  font-size: 1.4em;

  ${({ variant }) =>
    variant === "views" &&
    css`
      border-bottom: ${({ activeTabbar }) =>
        activeTabbar && "0.2em solid black"};
      padding-bottom: 0.2em;
    `}

  ${({ variant }) =>
    variant === "material" &&
    css`
      border-bottom: ${({ activeTabbar }) =>
        !activeTabbar && "0.2em solid black"};
      padding-bottom: 0.2em;
    `}

    ${({ variant }) =>
    variant === "categories" &&
    css`
      grid-row: 2;
      margin: 0;
      padding: 0 0 0 1em;
      font-size: 0.9em;
      font-weight: 300;
    `}

    ${({ variant }) =>
    variant === "modal" &&
    css`
      text-align: center;
    `}
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0.3em;
`;

export const GridWrapper = styled.div`
  display: grid;

  ${({ variant }) =>
    variant === "title" &&
    css`
      grid-template-columns: fit-content(repeat(2, 1fr));
      grid-template-rows: fit-content(repeat(3, 1fr));
      align-items: center;
      row-gap: 0.3em;
      padding: 0.5em 1em 0 1em;
      margin: 0;
    `}

  ${({ variant }) =>
    variant === "modal" &&
    css`
      width: 95vw;
      height: 95vh;
      border-radius: 1em;
      align-items: flex-start;
      background-color: var(--color-background);
    `}

    ${({ variant }) =>
    variant === "content-stretch" &&
    css`
      display: grid;
      justify-content: stretch;
      background-color: var(--color-background);
    `}

  ${({ variant }) =>
    variant === "image" &&
    css`
      justify-self: flex-end;
      height: 120px;
      width: 120px;
      grid-column: 2;
      grid-row: 1;
    `}
`;

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
    variant === "gap" &&
    css`
      gap: 0.6em;
    `}

    ${({ variant }) =>
    variant === "space-between" &&
    css`
      align-items: center;
      padding: 0 0.5em;
    `}

    ${({ variant }) =>
    variant === "space-evenly" &&
    css`
      justify-content: space-evenly;
      position: relative;
      top: 4em;
    `}
`;
