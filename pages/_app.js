import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { id, viewId } = router.query;

  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });
  const [views, setViews] = useLocalStorageState("views", { defaultValue: [] });

  const currentProject = projects.find((project) => project.id === id);
  const currentView = views.find((view) => view.id === viewId);

  function handleDeleteProject(id) {
    setProjects((oldProjects) =>
      oldProjects.filter((project) => project.id !== id)
    );
    router.back();
  }

  function handleDeleteView(id) {
    setViews((oldViews) => oldViews.filter((view) => view.id !== id));
    router.back();
  }

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
        id: uuidv4(),
        projectId: currentProject.id,
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
        addNewView={addNewView}
        handleDeleteProject={handleDeleteProject}
        handleDeleteView={handleDeleteView}
        addNewProject={addNewProject}
        views={views}
        projects={projects}
        currentProject={currentProject}
        currentView={currentView}
      />
      <Navigation />
    </>
  );
}
