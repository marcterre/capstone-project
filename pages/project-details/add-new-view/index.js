import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

export default function AddNewView() {
  const [submitText, setSubmitText] = useState(false);

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitText(!submitText);
  }

  return (
    <>
      <header>
        <H1>Add a new view</H1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <LabelWrapper>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name" type="text" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" />
            <label htmlFor="sketch">Add your sketch:</label>
            <input type="text" name="sketch" id="sketch" />
          </LabelWrapper>
          {submitText ? <p>Submitted</p> : null}
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

const H1 = styled.h1`
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
