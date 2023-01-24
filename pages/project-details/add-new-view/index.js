import { useRouter } from "next/router";
import styled from "styled-components";

export default function AddNewView() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.back();
  }

  return (
    <>
      <header>
        <H1>Create a new project</H1>
      </header>
      <main>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" />
          <label htmlFor="sketch">Add your sketch:</label>
          <input type="text" name="sketch" id="sketch" />
          <Button type="submit">Save</Button>
        </Form>
      </main>
    </>
  );
}

const H1 = styled.h1`
  margin: 10px;
`;

const Button = styled.button`
  position: fixed;
  bottom: 70px;
  right: 30px;
  width: 100px;
  height: 30px;
`;

const Form = styled.form`
  display: grid;
  padding: 5vw;
  gap: 1vh;
`;
