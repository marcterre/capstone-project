import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const myProjectsContext = createContext();

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState([]);

  function addNewProject(newProject) {
    setProjects((oldProjects) => [
      {
        ...newProject,
        id: uuidv4(),
        slug: newProject.projectName,
      },
      ...oldProjects,
    ]);
  }

  return (
    <>
      <myProjectsContext.Provider value={projects}>
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component {...pageProps} addNewProject={addNewProject} />
        <Navigation />
      </myProjectsContext.Provider>
    </>
  );
}
