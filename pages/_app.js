import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";

export const myProjectsContext = createContext();
export const myViewsContext = createContext();

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });

  const [views, setViews] = useState([]);

  function addNewProject(newProject) {
    setProjects((oldProjects) => [
      {
        ...newProject,
        id: uuidv4(),
        slug: newProject.name,
      },
      ...oldProjects,
    ]);
  }

  function addNewView(newView) {
    setViews((oldViews) => [
      {
        ...newView,
        id: uuidv4(),
        slug: newView.name,
      },
      ...oldViews,
    ]);
  }

  return (
    <myViewsContext.Provider value={views}>
      <myProjectsContext.Provider value={projects}>
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component
          {...pageProps}
          addNewProject={addNewProject}
          addNewView={addNewView}
        />
        <Navigation />
      </myProjectsContext.Provider>
    </myViewsContext.Provider>
  );
}
