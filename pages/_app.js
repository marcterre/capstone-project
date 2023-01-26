import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;

  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });

  const [views, setViews] = useLocalStorageState("views", { defaultValue: [] });

  const currentProject = projects.find((project) => project.id === id);

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
        addNewView={addNewView}
        currentProject={currentProject}
      />
      <Navigation />
    </>
  );
}
