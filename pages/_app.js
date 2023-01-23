import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";
import { createContext } from "react";

export const myProjectContext = createContext();

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState([]);

  function addNewProject(newProject) {
    setProjects((oldProjects) => [
      {
        ...newProject,
        id: uuidv4(),
      },
      ...oldProjects,
    ]);
  }

  return (
    <>
      <myProjectContext.Provider value={projects}>
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component {...pageProps} addNewProject={addNewProject} />
        <Navigation />
      </myProjectContext.Provider>
    </>
  );
}
