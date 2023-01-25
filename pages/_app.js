import Navigation from "@/components/Navigation";
import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { slug } = router.query;

  const [projects, setProjects] = useLocalStorageState("projects", {
    defaultValue: [],
  });

  const [views, setViews] = useLocalStorageState("views", { defaultValue: [] });

  const currentProject = projects.find((project) => project.slug === slug);

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
        viewSlug: newView.name,
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
        addNewView={addNewView}
        views={views}
        projects={projects}
        currentProject={currentProject}
      />
      <Navigation />
    </>
  );
}
