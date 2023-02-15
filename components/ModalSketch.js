import { useAtom } from "jotai";
import { statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import {
  StyledButton,
  Wrapper,
  GridWrapper,
  Spinner,
} from "./StyledComponents";
import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";
import SvgIcon from "./SvgIcon";

export default function ModalDelete({
  image,
  showModalSketch,
  handleClose,
  handleImageChange,
  handleDeleteImage,
}) {
  const [editImage, setEditImage] = useAtom(showEditImageAtom);
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);

  return (
    <Modal show={showModalSketch}>
      <GridWrapper variant="modal">
        <Wrapper variant="space-between">
          <h1>Your Sketch</h1>
          <Button
            onClick={() => {
              handleClose();
              setEditImage(false);
            }}
            aria-label="close"
          >
            X
          </Button>
        </Wrapper>
        {image.url ? (
          <>
            <StyledImage
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </>
        ) : (
          <Text>
            You can add a new image by clicking the
            <br />
            <SvgIcon variant="upload" width={50} aria-label="upload button" />
            <br /> below
          </Text>
        )}
        <Wrapper variant="flex-start">
          {statusUpload && <Spinner />}
          {statusUpload}
        </Wrapper>
        <ButtonGridWrapper>
          {editImage && (
            <Form onSubmit={handleImageChange}>
              <input type="file" name="imageFile" size={10000} />
              <StyledButton variant="submit">upload</StyledButton>
            </Form>
          )}
          <StyledButton
            variant="settings"
            onClick={handleDeleteImage}
            aria-label="delete"
          >
            <SvgIcon variant="bin" width="30px" />
          </StyledButton>
          <StyledButton
            variant="settings"
            onClick={() => {
              setEditImage(!editImage);
            }}
            aria-label="new upload"
          >
            <SvgIcon variant="upload" width="30px" />
          </StyledButton>
        </ButtonGridWrapper>
      </GridWrapper>
    </Modal>
  );
}

const Text = styled.p`
  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 90vw;
  height: 100%;
  justify-self: center;
`;

const ButtonGridWrapper = styled.div`
  position: fixed;
  bottom: 2.5em;
  right: 0;
  height: 5vh;
  padding: 0 1em 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
`;

const Form = styled.form`
  display: grid;
  gap: 0.3em;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 2em;
  height: 2em;
  background-color: var(--color-list-items-white);
  color: var(--color-project-inactive);
  outline: rgb(0, 0, 0, 0.2) solid 0.2em;
  border-radius: 50%;
`;
