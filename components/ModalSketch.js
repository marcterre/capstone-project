import { useAtom } from "jotai";
import { statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import { StyledButton, Wrapper, GridWrapper } from "./StyledComponents";
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
          <StyledButton
            variant="close"
            onClick={() => {
              handleClose();
              setEditImage(false);
            }}
          >
            <SvgIcon variant="aplhaX" width="30px" />
          </StyledButton>
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
          <TextWrapper>
            <p>
              You can add a new image by clicking the <br />{" "}
              <SvgIcon variant="upload" width={50} />
              <br /> below
            </p>
          </TextWrapper>
        )}
        {editImage && (
          <Form onSubmit={handleImageChange}>
            <p>{statusUpload}</p>
            <input type="file" name="imageFile" size={10000} />
            <button>upload</button>
          </Form>
        )}
        <ButtonGridWrapper>
          <button onClick={handleDeleteImage}>
            <SvgIcon variant="bin" width="30px" />
          </button>
          <button
            onClick={() => {
              setEditImage(!editImage);
            }}
          >
            <SvgIcon variant="upload" width="30px" />
          </button>
        </ButtonGridWrapper>
      </GridWrapper>
    </Modal>
  );
}

const TextWrapper = styled.div`
  padding: 0;
  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 95vw;
  height: auto;
`;

const ButtonGridWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-row: 4;
`;

const Form = styled.form``;
