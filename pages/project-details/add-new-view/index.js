import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function AddNewView() {
  const router = useRouter();

  return (
    <>
      <header>
        <h1>add a new view</h1>
      </header>
      <form>
        <label htmlFor="name">Name:</label>
      </form>
      <Form />
    </>
  );
}
