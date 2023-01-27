import { useRouter } from "next/router";
import styled from "styled-components";
import Modal from "./Modal";
import SettingsButton from "./SettingsButton";
import { useState } from "react";

export default function ModalDelete({ currentId, setEntries, Entry }) {
  const router = useRouter();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [popUpSettings, setPopUpSettings] = useState(false);

  function handleClose(event) {
    event.preventDefault();
    setShowModalDelete(false);
    setPopUpSettings(false);
  }

  function handleDelete(id) {
    setEntries((oldEntries) => oldEntries.filter((entry) => entry.id !== id));
    router.back();
  }

  return (
    <>
      <SettingsButton
        handlePopUpSettings={() => setPopUpSettings(!popUpSettings)}
        setEntries={setEntries}
        id={currentId}
        toggleModalDeleteButton={() => setShowModalDelete(!showModalDelete)}
        popUpSettings={popUpSettings}
      />
      <Modal show={showModalDelete}>
        <FlexWrapper>
          <h2>Do you really want to delete your {Entry}?</h2>
          <Wrapper>
            <StyledButton onClick={(event) => handleClose(event)}>
              No
            </StyledButton>
            <StyledButton onClick={() => handleDelete(currentId)}>
              Yes
            </StyledButton>
          </Wrapper>
        </FlexWrapper>
      </Modal>
    </>
  );
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;

const FlexWrapper = styled.div`
  background-color: rgb(250, 250, 250);
  width: 95vw;
  height: 30vh;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  align-items: flex-start;
  justify-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
