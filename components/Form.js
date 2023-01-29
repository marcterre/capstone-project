import styled from "styled-components";
import { useState } from "react";
import CharacterCounter from "./CharacterCounter";

export default function Form({ handleSubmit }) {
  const [count, setCount] = useState(0);
  const [countDescr, setCountDescr] = useState(0);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <Input
        id="name"
        name="name"
        type="text"
        pattern="^[a-zA-Z0-9äÄüÜöÖ][a-zA-Z0-9_. ß]{1,}"
        maxLength="30"
        onChange={(event) => setCount(event.target.value.length)}
        required
      />
      <CharacterCounter maxLength={30} counter={count} />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        maxLength="100"
        onChange={(event) => setCountDescr(event.target.value.length)}
      />
      <CharacterCounter maxLength={100} counter={countDescr} />
      <label htmlFor="sketch">Add your sketch:</label>
      <Input type="text" name="sketch" id="sketch" />
      <Button type="submit">Save</Button>
    </StyledForm>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 70px;
  right: 30px;
  width: 100px;
  height: 30px;
`;

const StyledForm = styled.form`
  display: grid;
  padding: 5vw;
  gap: 1vh;
`;

const Input = styled.input`
  overflow: hidden;
`;
