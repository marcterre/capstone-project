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
  padding: 0 4em;
  margin: 0;
  width: 100vw;
  height: 7vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: #3f618c;
  /* background-color: var(--color-darkblue); */
  list-style: none;
`;
