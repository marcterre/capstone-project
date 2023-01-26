import BinIcon from "@/public/binIcon.svg";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function DeleteButton({ setEntries, id }) {
  const router = useRouter();

  function handleDelete(id) {
    setEntries((oldEntries) => oldEntries.filter((entry) => entry.id !== id));
    router.push("/");
  }

  return (
    <Button onClick={() => handleDelete(id)}>
      <StyledBinIcon />
    </Button>
  );
}

const StyledBinIcon = styled(BinIcon)`
  width: 36px;
  height: 36px;
`;

const Button = styled.button`
  background: none;
  border: none;
`;
