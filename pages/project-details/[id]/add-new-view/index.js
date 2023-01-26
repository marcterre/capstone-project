import { useRouter } from "next/router";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function AddNewView({ setViews, currentProject }) {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [countDescr, setCountDescr] = useState(0);

  function addNewView(newView) {
    setViews((oldViews) => [
      {
        ...newView,
        viewId: uuidv4(),
        projectId: currentProject.id,
      },
      ...oldViews,
    ]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addNewView(data);
    router.back();
  }

  return (
    <>
      <header>
        <Title>Add a new view</Title>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <LabelWrapper>
            <label htmlFor="name">Name:</label>
            <Input
              id="name"
              name="name"
              type="text"
              pattern="^[a-zA-Z0-9öÖäÄüÜöÖ][a-zA-Z0-9_. ß]{1,30}"
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
          </LabelWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </ButtonWrapper>
        </form>
      </main>
    </>
  );
}

const CounterLetters = styled.p`
  font-size: 0.8em;
  margin: 0;
  position: relative;
  right: 0;
`;

const Title = styled.h1`
  margin: 10px;
`;

const LabelWrapper = styled.div`
  padding: 5vw;
  display: grid;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

const Input = styled.input`
  overflow: hidden;
`;
