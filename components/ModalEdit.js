import { useState } from "react";
import styled from "styled-components";
import CharacterCounter from "./CharacterCounter";
import Modal from "./Modal";

export default function ModalDelete({
  currentEntry,
  showModalEdit,
  handleClose,
  handleChanges,
}) {
  const [count, setCount] = useState(0);
  const [countDescr, setCountDescr] = useState(0);

  const [name, setName] = useState(currentEntry.name);
  const [description, setDescription] = useState(currentEntry.description);

  return (
    <Modal show={showModalEdit}>
      <Form onSubmit={handleChanges}>
        <GridWrapper>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            maxLength="30"
            required
          />
          <CharacterCounter maxLength={30} counter={count} />
          <input
            type="text"
            name="description"
            value={description}
            placeholder={"Enter a description"}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <CharacterCounter maxLength={100} counter={count} />
        </GridWrapper>
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
  height: 50vh;
  display: grid;
`;

const GridWrapper = styled.div`
  display: grid;
  padding: 50px 10px 0 10px;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
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
