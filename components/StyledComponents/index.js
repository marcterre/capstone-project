import styled, { css, keyframes } from "styled-components";
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
  border-radius: 0.3em;
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

    ${({ variant }) =>
    variant === "name" &&
    css`
      font-weight: 600;
      width: 60vw;
      background: none;
      box-shadow: none;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  box-shadow: var(--box-shadow-black);
  &:active {
    position: relative;
    top: 1px;
  }

  ${({ variant }) =>
    variant === "full-width" &&
    css`
      width: 90vw;
      font-size: 1em;
      background-color: var(--color-buttons);
      padding: 0.3em;
    `}

  ${({ variant }) =>
    variant === "cancel" &&
    css`
      background-color: var(--color-list-items-white);
      color: var(--color-project-inactive);
      padding: 0.2em 2em;
      font-size: 1em;
    `}

  ${({ variant }) =>
    variant === "submit" &&
    css`
      background-color: var(--color-buttons);
      padding: 0.2em 2.5em;
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
      grid-column: 1 / span 2;
      background: none;
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
    `}

    ${({ variant }) =>
    variant === "unlarge" &&
    css`
      top: -2.5em;
      right: -6em;
      width: 2.5em;
      height: 2.5em;
      border-radius: 2em;
      background-color: var(--color-background);
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
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9em;
  padding: 0.8em 0;
`;

export const Selection = styled.select`
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  text-align: center;
  cursor: pointer;
  border: var(--border-yellow);
`;

export const StyledInput = styled.input`
  background-color: var(--color-list-items-white);
  border: none;
  border-radius: 0.3em;
  padding: 0.7em;
  box-shadow: var(--box-shadow-darkblue);

  ${({ variant }) =>
    variant === "file" &&
    css`
      padding: 0.5em 0;
      background: none;
      font-size: 0.9em;
      box-shadow: none;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 0.2em;

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
    variant === "full-width" &&
    css`
      background-color: var(--color-buttons);
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
  resize: none;
  background-color: var(--color-list-items-white);
  border: none;
  padding: 0.7em;
  border-radius: 0.3em;
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
      padding: 0 0 0 1em;
      font-size: 0.9em;
      font-weight: 300;
    `}

    ${({ variant }) =>
    variant === "center" &&
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
      grid-template-rows: repeat(3, 1fr);
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
      top: 9em;
    `}

    ${({ variant }) =>
    variant === "flex-start" &&
    css`
      position: absolute;
      bottom: 9em;
      left: 2em;
      justify-content: flex-start;
      gap: 1em;
    `}
`;

const rotate360 = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-top: 0.2em solid grey;
  border-right: 0.2em solid grey;
  border-bottom: 0.2em solid grey;
  border-left: 0.3em solid black;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
`;
