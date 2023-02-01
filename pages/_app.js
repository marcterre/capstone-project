import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { projectsAtom, viewsAtom } from "@/lib/atom";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { id, viewId } = router.query;

  const [projects, setProjects] = useAtom(projectsAtom);
  const [views, setViews] = useAtom(viewsAtom);

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

  function handleProjectDetailsChange(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setProjects(
      projects.map((entry) =>
        entry.id === currentProject.id ? { ...entry, ...data } : entry
      )
    );
  }

  function handleViewDetailsChange(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setViews(
      views.map((entry) =>
        entry.id === currentView.id ? { ...entry, ...data } : entry
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        handleProjectDetailsChange={handleProjectDetailsChange}
        handleViewDetailsChange={handleViewDetailsChange}
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
