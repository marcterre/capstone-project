import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function CreateNewProject({ addNewProject }) {
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

    addNewProject(newData);
    router.push("/");
  }

  return (
    <>
      <header>
        <Title>Create a new project</Title>
      </header>
      <main>
        <Form handleSubmit={handleSubmit} />
      </main>
    </>
  );
}

const Title = styled.h1`
  margin: 10px;
`;
