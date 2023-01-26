import { useRouter } from "next/router";
import styled from "styled-components";

export default function AddNewView({ addNewView }) {
  const router = useRouter();
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
              pattern="^[a-zA-Z0-9öÖäÄüÜ][a-zA-Z0-9_. ß]{1,30}"
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="100 letters allowed"
              maxLength={100}
            />
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
  overflow: scroll;
`;
