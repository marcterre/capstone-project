import styled from "styled-components";
import { useRouter } from "next/router";

export default function CreateNewProject({ addNewProject }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    addNewProject(data);
    router.push("/");
  }
  return (
    <>
      <header>
        <Title>Create a new project</Title>
      </header>
      <main>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <Input
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Z0-9][a-zA-Z0-9_. ]{1,20}"
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" />
          <label htmlFor="sketch">Add your sketch:</label>
          <Input type="text" name="sketch" id="sketch" />
          <Button type="submit">Save</Button>
        </Form>
      </main>
    </>
  );
}

const Title = styled.h1`
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

const Input = styled.input`
  overflow: scroll;
`;
