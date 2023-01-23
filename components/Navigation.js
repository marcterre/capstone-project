import Link from "next/link";
import styled from "styled-components";
import IconAdd from "@/public/iconAdd.svg";
import IconHome from "@/public/iconHome.svg";

export default function Navigation() {
  return (
    <Ul>
      <li>
        <Link href="/">
          <IconHome />
        </Link>
      </li>
      <li>
        <Link href="/create-new-project">
          <IconAdd />
        </Link>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
