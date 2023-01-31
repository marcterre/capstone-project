import { useRouter } from "next/router";
import styled from "styled-components";
import Form from "@/components/Form";

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
        <Title>Add a new project view</Title>
      </header>
      <Main>
        <Form handleSubmit={handleSubmit} />
        <Button onClick={() => router.back()}>Cancel</Button>
      </Main>
    </>
  );
}

const Title = styled.h1`
  margin: 10px;
`;

const Main = styled.main`
  display: grid;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  position: absolute;
  right: 5vw;
  bottom: 100px;
`;
