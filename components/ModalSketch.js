import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";
import PencilIcon from "@/public/pencil.svg";
import { useState } from "react";
import { useAtom } from "jotai";
import { projectsAtom, viewsAtom } from "@/lib/atom";

export default function ModalDelete({
  image,
  showModalSketch,
  handleClose,
  currentEntry,
  handleImageChange,
}) {
  const [views, setViews] = useAtom(viewsAtom);

  const [editImage, setEditImage] = useState(false);

  return (
    <Modal show={showModalSketch}>
      <GridWrapper>
        <Wrapper>
          <h1>Your Sketch</h1>
          <StyledButton onClick={handleClose}>Close</StyledButton>
        </Wrapper>
        <StyledImage
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <FormWrapper>
          <button onClick={() => setEditImage(!editImage)}>
            <StyledPencilIcon />
          </button>
          {editImage ? (
            <form onSubmit={handleImageChange}>
              <input type="file" name="imageFile" />
              <button>save</button>
            </form>
          ) : null}
        </FormWrapper>
      </GridWrapper>
    </Modal>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 36px;
  height: 36px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  max-width: 95vw;
  max-height: 80vh;
`;

const StyledButton = styled.button`
  font-size: 1.2em;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;

const GridWrapper = styled.div`
  background-color: rgb(250, 250, 250);
  display: grid;
`;

const Wrapper = styled.div`
  max-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
