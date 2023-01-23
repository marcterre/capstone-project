import styled from "styled-components";

export default function CreateNewProject() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <header>
        <h1>Create a new project</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="projectName">Name:</label>
          <input id="projectName" name="projectName" type="text" />
          <label htmlFor="projectDescription">Description</label>
          <textarea id="projectDescription" name="projectDescription" />
          <label htmlFor="projectSketch">Add your sketch:</label>
          <input type="text" name="projectSketch" id="projectSketch" />
          <Button type="submit">Save</Button>
        </form>
      </main>
    </>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 70px;
  right: 40px;
`;
