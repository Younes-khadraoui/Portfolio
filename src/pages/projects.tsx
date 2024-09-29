import Allprojects from "../components/projects/Allprojects";
import Myprojects from "../components/projects/Myprojects";
import Head from "next/head";

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <Myprojects />
      <Allprojects />
    </div>
  );
};

export default Projects;
