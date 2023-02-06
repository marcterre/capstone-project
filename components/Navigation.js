import Link from "next/link";
import styled from "styled-components";
import AddIcon from "@/public/icons/plus.svg";
import HomeIcon from "@/public/icons/home.svg";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";

export default function Navigation() {
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);

  return (
    <StyledNavigation>
      <List>
        <li>
          <Link href="/" onClick={() => setStatusUpload("")}>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
          </Link>
        </li>
        <li>
          <Link href="/create-new-project">
            <IconWrapper>
              <AddIcon />
            </IconWrapper>
          </Link>
        </li>
      </List>
    </StyledNavigation>
  );
}

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

const IconWrapper = styled.div`
  display: flex;
  width: 2.8em;
  border-radius: 50%;
  background-color: var(--color-buttons-yellow);
  &:focus-within {
    background-color: var(--color-background);
  }
`;
