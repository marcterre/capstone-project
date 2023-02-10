import { useAtom } from "jotai";
import { statusUploadAtom, showEditImageAtom } from "@/lib/atom";
import { StyledButton, Wrapper } from "./StyledComponents";
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
      <Wrapper variant="grid">
        <Wrapper variant="formSubmit">
          <h1>Your Sketch</h1>
          <StyledButton
            variant="close"
            onClick={() => {
              handleClose();
              setEditImage(false);
            }}
          >
            <SvgIcon variant="aplhaX" />
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
              <SvgIcon variant="upload" />
              <br /> below
            </p>
          </TextWrapper>
        )}
        {editImage && (
          <form onSubmit={handleImageChange}>
            <p>{statusUpload}</p>
            <input type="file" name="imageFile" size={10000} />
            <button>upload</button>
          </form>
        )}
        <button
          onClick={() => {
            setEditImage(!editImage);
          }}
        >
          <SvgIcon variant="upload" />
        </button>
        <button onClick={handleDeleteImage}>
          <SvgIcon variant="bin" />
        </button>
      </Wrapper>
    </Modal>
  );
}

const TextWrapper = styled.div`
  padding: 10em 2em;
  text-align: center;
`;

// const StyledUploadIcon = styled(UploadIcon)`
//   width: 36px;
//   height: 36px;
// `;

// const StyledBinIcon = styled(BinIcon)`
//   width: 36px;
//   height: 36px;
// `;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 95vw;
  height: 70vh;
`;

// const Wrapper = styled.div`
//   background-color: rgb(250, 250, 250);
//   display: grid;
// `;

const TitleWrapper = styled.div`
  max-height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
