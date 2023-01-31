import { useRouter } from "next/router";
import styled from "styled-components";
import Form from "@/components/Form";

export default function AddNewView({ addNewView }) {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });

    const imageData = await response.json();

    const newData = {
      ...data,
      image: {
        id: imageData.public_id,
        url: imageData.secure_url,
        width: imageData.width,
        height: imageData.height,
        alt: "",
      },
    };

    addNewView(newData);
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
