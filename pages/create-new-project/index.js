import Form from "@/components/Form";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import { Title } from "@/components/StyledComponents";

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
      dimensions: [],
      isActive: true,
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
