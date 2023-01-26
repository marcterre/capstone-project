import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function ModalDeleteButton({
  showModalDelete,
  setShowModalDelete,
  currentId,
  setEntries,
  setPopUpSettings,
}) {
  const [isBrowser, setIsBrowser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  function handleClose(event) {
    event.preventDefault();
    setShowModalDelete(false);
    setPopUpSettings(false);
  }

  function handleDelete(id) {
    setEntries((oldEntries) => oldEntries.filter((entry) => entry.id !== id));
    router.push("/");
  }

  const modalContent = showModalDelete ? (
    <Overlay>
      <StyledModal>
        <Header></Header>
        <h2>Do you really want to delete your project?</h2>
        <StyledBody>
          <StyledButton onClick={(event) => handleClose(event)}>
            No
          </StyledButton>
          <StyledButton onClick={() => handleDelete(currentId)}>
            Yes
          </StyledButton>
        </StyledBody>
      </StyledModal>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1.2em;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;

const StyledBody = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Header = styled.div`
  display: flex;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 95vw;
  height: 30vh;
  border-radius: 5px;
  padding: 15px;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
