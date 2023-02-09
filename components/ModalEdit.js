import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import CharacterCounter from "./CharacterCounter";
import Modal from "./Modal";
import SelectCategories from "./SelectCategories";
import SelectViewSide from "./SelectViewSide";
import { Wrapper } from "./StyledComponents/Wrapper";
import { StyledButton } from "./StyledComponents/StyledButton";
import { Title } from "./StyledComponents/Title";

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
        <Wrapper variant="formSubmit">
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
  background-color: rgb(250, 250, 250);
  padding: 20px 0;
  width: 95vw;
  height: 70vh;
  display: grid;
`;

const GridWrapper = styled.div`
  display: grid;
  padding: 20px 10px;
  gap: 5px;
`;
