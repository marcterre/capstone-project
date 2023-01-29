import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

export default function ModalDelete({
  currentEntry,
  showModalEdit,
  handleClose,
  handleChanges,
}) {
  const [name, setName] = useState(currentEntry.name);
  const [description, setDescription] = useState(currentEntry.description);

  return (
    <Modal show={showModalEdit}>
      <Form onSubmit={handleChanges}>
        <Wrapper>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <input
            type="text"
            name="description"
            value={description}
            placeholder={"Enter a description"}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </Wrapper>
        <ButtonWrapper>
          <StyledButton type="button" onClick={handleClose}>
            Cancel
          </StyledButton>
          <StyledButton type="submit">Save changes</StyledButton>
        </ButtonWrapper>
      </Form>
    </Modal>
  );
}

const Form = styled.form`
  background-color: rgb(250, 250, 250);
  width: 95vw;
  height: 70vh;
`;

const Wrapper = styled.div`
  display: grid;
  height: 50%;
  padding: 50px 10px;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 0;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.2em;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;
