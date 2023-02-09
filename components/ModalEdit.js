import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import CharacterCounter from "./CharacterCounter";
import Modal from "./Modal";
import SelectCategories from "./SelectCategories";
import SelectViewSide from "./SelectViewSide";

export default function ModalEdit({
  currentEntry,
  showModalEdit,
  handleClose,
  handleChanges,
}) {
  const router = useRouter();
  const [count, setCount] = useState(currentEntry.name.length);
  const [countDescription, setCountDescription] = useState(
    currentEntry.name.length
  );

  const [name, setName] = useState(currentEntry.name);
  const [description, setDescription] = useState(currentEntry.description);
  const [category, setCategory] = useState(currentEntry.categories);

  return (
    <Modal show={showModalEdit}>
      <Form onSubmit={handleChanges}>
        <GridWrapper>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Z0-9äüöÄÜÖ][a-zA-Z0-9-_ äüöÄÜÖß.`'´]{1,}"
            onChange={(event) => {
              setCount(event.target.value.length);
              setName(event.target.value);
            }}
            maxLength="30"
            required
          />
          <CharacterCounter maxLength={30} counter={count} />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            name="description"
            value={description}
            placeholder={"Enter a description"}
            onChange={(event) => {
              setCountDescription(event.target.value.length);
              setDescription(event.target.value);
            }}
            maxLength="100"
          />
          <CharacterCounter maxLength={100} counter={countDescription} />
          {!router.pathname.includes("view-details") ? (
            <SelectCategories>
              <option>{currentEntry.categories}</option>
            </SelectCategories>
          ) : (
            <SelectViewSide>
              <option>{currentEntry.viewSide}</option>
            </SelectViewSide>
          )}
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
  padding: 20px 0;
  width: 95vw;
  display: grid;
`;

const GridWrapper = styled.div`
  display: grid;
  padding: 20px 10px;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding: 20px;
`;

const StyledButton = styled.button`
  padding: 10px;
  font-size: 1.2em;
  background: none;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
`;
