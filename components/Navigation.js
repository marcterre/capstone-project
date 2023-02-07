import Link from "next/link";
import styled from "styled-components";
import AddIcon from "@/public/icons/plus.svg";
import HomeIcon from "@/public/icons/home.svg";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import { useRouter } from "next/router";

export default function Navigation() {
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();

  return (
    <StyledNavigation>
      <List>
        <li>
          <Link href="/" onClick={() => setStatusUpload("")}>
            <StyledHomeIcon isFocused={router.pathname} />
          </Link>
        </li>
        <li>
          <Link href="/create-new-project">
            <StyledAddIcon isFocused={router.pathname} />
          </Link>
        </li>
      </List>
    </StyledNavigation>
  );
}

const StyledHomeIcon = styled(HomeIcon)`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  background-color: ${({ isFocused }) =>
    isFocused === "/"
      ? "var( --color-background)"
      : "var(--color-buttons-yellow)"};
`;

const StyledAddIcon = styled(AddIcon)`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  background-color: ${({ isFocused }) =>
    isFocused === "/create-new-project"
      ? "var( --color-background)"
      : "var(--color-buttons-yellow)"};
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
