import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/Form";

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
        <Form handleSubmit={handleSubmit} />
      </main>
    </>
  );
}

const Title = styled.h1`
  margin: 10px;
`;
