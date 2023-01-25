import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });

  const [views, setViews] = useLocalStorageState("views", { defaultValue: [] });

  function addNewProject(newProject) {
    setProjects((oldProjects) => [
      {
        ...newProject,
        id: uuidv4(),
      },
      ...oldProjects,
    ]);
  }

  function addNewView(newView) {
    setViews((oldViews) => [
      {
        ...newView,
        viewId: uuidv4(),
        // projectId: currentProject.id,
      },
      ...oldViews,
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        addNewProject={addNewProject}
        views={views}
        projects={projects}
        setViews={setViews}
        addNewView={addNewView}
        // currentProject={currentProject}
      />
      <Navigation />
    </>
  );
}
