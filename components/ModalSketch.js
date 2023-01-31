import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";
import PencilIcon from "@/public/pencil.svg";
import { useState } from "react";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";

export default function ModalDelete({
  image,
  showModalSketch,
  handleClose,
  handleImageChange,
}) {
  const [editImage, setEditImage] = useState(false);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);

  return (
    <Modal show={showModalSketch}>
      <GridWrapper>
        <TitleWrapper>
          <h1>Your Sketch</h1>
          <StyledButton onClick={handleClose}>Close</StyledButton>
        </TitleWrapper>
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
              <InputWrapper>
                <p>{statusUpload}</p>
                <input type="file" name="imageFile" />
                <button>save</button>
              </InputWrapper>
            </form>
          ) : null}
        </FormWrapper>
      </GridWrapper>
    </Modal>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: column-reverse;
`;

const StyledPencilIcon = styled(PencilIcon)`
  width: 36px;
  height: 36px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100vw;
  height: 70vh;
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

const TitleWrapper = styled.div`
  max-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
