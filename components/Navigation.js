import styled from "styled-components";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import { useRouter } from "next/router";
import { StyledLink } from "./StyledComponents";
import SvgIcon from "./SvgIcon";

export default function Navigation() {
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);
  const router = useRouter();

  return (
    <StyledNavigation>
      <List>
        <li>
          <StyledLink
            href="/"
            onClick={() => setStatusUpload("")}
            isfocused={router.pathname}
            variant="home"
          >
            <SvgIcon variant="home" />
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="/create-new-project"
            isfocused={router.pathname}
            variant="plus"
          >
            <SvgIcon variant="plus" />
          </StyledLink>
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
