import { titles } from "../lib/data.json";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Your Projects</h1>
      </header>
      <main>
        <ul>
          {titles.map((title) => (
            <li key={crypto.randomUUID()}>{title.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
