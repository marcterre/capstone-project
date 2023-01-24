import styled from "styled-components";

export default function Form({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" />
      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" />
      <label htmlFor="sketch">Add your sketch:</label>
      <input type="text" name="sketch" id="sketch" />
      <Button type="submit">Save</Button>
    </Form>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 70px;
  right: 30px;
  width: 100px;
  height: 30px;
`;
