import styled from "styled-components";
import { useRouter } from "next/router";
import Form from "@/components/Form";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";

export default function CreateNewProject({ addNewProject }) {
  const router = useRouter();
  const [statusUpload, setStatusUpload] = useAtom(statusUploadAtom);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setStatusUpload("Loading...");

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
    setStatusUpload("");
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
