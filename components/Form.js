import styled from "styled-components";
import { useState } from "react";

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
      {count < 30 && count >= 0 ? (
        <CounterLetters>{count}/30 letters left</CounterLetters>
      ) : (
        <CounterLetters>no letters left</CounterLetters>
      )}
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        maxLength={100}
        onChange={(event) => setCountDescr(event.target.value.length)}
      />
      {countDescr < 100 && countDescr >= 0 ? (
        <CounterLetters>{countDescr}/100 letters left</CounterLetters>
      ) : (
        <CounterLetters>no letters left</CounterLetters>
      )}
      <label htmlFor="sketch">Add your sketch:</label>
      <Input type="text" name="sketch" id="sketch" />
      <Button type="submit">Save</Button>
    </StyledForm>
  );
}

const CounterLetters = styled.p`
  font-size: 0.8em;
  margin: 0;
  position: relative;
  right: 0;
`;

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
