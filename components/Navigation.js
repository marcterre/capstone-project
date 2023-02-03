import Link from "next/link";
import styled from "styled-components";
import IconAdd from "@/public/iconAdd.svg";
import IconHome from "@/public/iconHome.svg";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";

export default function Navigation() {
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);

  return (
    <List>
      <li>
        <Link href="/" onClick={() => setStatusUpload("")}>
          <IconHome />
        </Link>
      </li>
      <li>
        <Link href="/create-new-project">
          <IconAdd />
        </Link>
      </li>
    </List>
  );
}

const List = styled.ul`
  background-color: rgb(250, 250, 250);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  padding: 0;
  margin: 0;
`;
