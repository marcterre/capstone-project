import { useRouter } from "next/router";

export default function ProjectDetails() {
  const router = useRouter();

  return (
    <>
      <header>
        <h1>Project 1</h1>
      </header>
      <main>
        <section>
          <h2>Description</h2>
          <p>Lorem ipsum...</p>
        </section>
        <section>
          <h2>Your sketch</h2>
        </section>
        <button type="button" onClick={() => router.push("/")}>
          Go back
        </button>
      </main>
    </>
  );
}
