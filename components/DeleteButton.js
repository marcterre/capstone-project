import BinIcon from "@/public/binIcon.svg";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function DeleteButton({ toggleModalDeleteButton }) {
  return (
    <>
      <Button onClick={() => toggleModalDeleteButton()}>
        <StyledBinIcon />
      </Button>
    </>
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
