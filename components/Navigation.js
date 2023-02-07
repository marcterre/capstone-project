import Link from "next/link";
import styled from "styled-components";
import AddIcon from "@/public/icons/plus.svg";
import HomeIcon from "@/public/icons/home.svg";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();

  return (
    <StyledNavigation>
      <List>
        <li>
          <Link href="/" onClick={() => setStatusUpload("")}>
            <HomeIconWrapper isFocused={router.pathname}>
              <HomeIcon />
            </HomeIconWrapper>
          </Link>
        </li>
        <li>
          <Link href="/create-new-project">
            <AddIconWrapper isFocused={router.pathname}>
              <AddIcon />
            </AddIconWrapper>
          </Link>
        </li>
      </List>
    </StyledNavigation>
  );
}

const HomeIconWrapper = styled.div`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  background-color: ${({ isFocused }) =>
    isFocused === "/"
      ? "var( --color-background)"
      : "var(--color-buttons-yellow)"};
  &:active {
    position: relative;
    top: 1px;
  }
`;

const AddIconWrapper = styled.div`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  background-color: ${({ isFocused }) =>
    isFocused === "/create-new-project"
      ? "var( --color-background)"
      : "var(--color-buttons-yellow)"};
  &:active {
    position: relative;
    top: 1px;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  padding: 0.3em 3.5em;
  margin: 0;
  width: 95vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-darkblue);
  list-style: none;
  border-radius: 2em 2em 0 0;
`;
