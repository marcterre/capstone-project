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
      left: 24.3em;
      border-radius: 2em 0;
      box-shadow: none;
      background-color: var(--color-background);
      &:active {
        top: 6.7em;
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
    `}
`;

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
  border-radius: 2em;
  padding: 0.7em;
  box-shadow: var(--box-shadow-darkblue);
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-weight: 600;
  padding: 0.7em 0;
  font-size: 1.5em;
  position: relative;

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
      grid-column: 1 / span 2;
      margin: 0;
      top: 6.1rem;
      padding: 0 0 1em 0;
      font-size: 0.9em;
      font-weight: 300;
    `}
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0.3em;
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
      background-color: var(--color-background);
    `}

    ${({ variant }) =>
    variant === "deleteButtons" &&
    css`
      gap: 3em;
    `}
`;
