import Form from "@/components/Form";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { statusUploadAtom } from "@/lib/atom";
import { Title } from "@/components/StyledComponents/Title";

export default function AddNewView({ addNewView }) {
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
    };

    addNewView(newData);
    setStatusUpload("");
    router.back();
  }

  return (
    <>
      <header>
        <Title>Add a new project view</Title>
      </header>
      <main>
        <Form handleSubmit={handleSubmit} />
      </main>
    </>
  );
}
