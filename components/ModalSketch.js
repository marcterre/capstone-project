import styled from "styled-components";
import Modal from "./Modal";
import Image from "next/image";
import UploadIcon from "@/public/upload.svg";
import BinIcon from "@/public/binIcon.svg";
import { useAtom } from "jotai";
import { statusUploadAtom, showEditImageAtom } from "@/lib/atom";

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
      <GridWrapper>
        <TitleWrapper>
          <h1>Your Sketch</h1>
          <StyledButton
            onClick={() => {
              handleClose();
              setEditImage(false);
            }}
          >
            Close
          </StyledButton>
        </TitleWrapper>
        {image.url ? (
          <StyledImage
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        ) : (
          <TextWrapper>
            <p>
              You can add a new image by clicking the <br /> <UploadIcon />
              <br /> below
            </p>
          </TextWrapper>
        )}
        <FormWrapper>
          <button
            onClick={() => {
              setEditImage(!editImage);
            }}
          >
            <StyledUploadIcon />
          </button>
          <button onClick={handleDeleteImage}>
            <StyledBinIcon />
          </button>
          {editImage ? (
            <form onSubmit={handleImageChange}>
              <InputWrapper>
                <p>{statusUpload}</p>
                <input type="file" name="imageFile" />
                <button>upload</button>
              </InputWrapper>
            </form>
          ) : null}
        </FormWrapper>
      </GridWrapper>
    </Modal>
  );
}

const TextWrapper = styled.div`
  padding: 10em 2em;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: column-reverse;
`;

const StyledUploadIcon = styled(UploadIcon)`
  width: 36px;
  height: 36px;
`;

const StyledBinIcon = styled(BinIcon)`
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
