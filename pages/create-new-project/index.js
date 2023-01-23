import styled from "styled-components";

export default function CreateNewProject() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <header>
        <H1>Create a new project</H1>
      </header>
      <main>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="projectName">Name:</label>
          <input id="projectName" name="projectName" type="text" />
          <label htmlFor="projectDescription">Description:</label>
          <textarea id="projectDescription" name="projectDescription" />
          <label htmlFor="projectSketch">Add your sketch:</label>
          <input type="text" name="projectSketch" id="projectSketch" />
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
