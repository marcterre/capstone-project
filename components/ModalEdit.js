import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import CharacterCounter from "./CharacterCounter";
import SelectCategories from "./SelectCategories";
import SelectViewSide from "./SelectViewSide";
import {
  Wrapper,
  StyledButton,
  Title,
  StyledInput,
  StyledTextarea,
} from "./StyledComponents";

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
        <Title>Edit your entries</Title>
        <Wrapper variant="grid">
          <label htmlFor="name">Name:</label>
          <StyledInput
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
          <StyledTextarea
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
        </Wrapper>
        <Wrapper variant="contentEvenly">
          <StyledButton variant="cancel" type="button" onClick={handleClose}>
            Cancel
          </StyledButton>
          <StyledButton type="submit" variant="submit">
            Save
          </StyledButton>
        </Wrapper>
      </Form>
    </Modal>
  );
}

const Form = styled.form`
  background-color: var(--color-background);
  border-radius: 2em;
  padding: 1em;
  width: 95vw;
  height: 75vh;
  display: grid;
  gap: 1em;
`;
