import plants from "../assets/plants.png";
import weather from "../assets/weather.png";
import icarus from "../assets/icarus.png";
import Project from "@/components/project";
import Head from "next/head";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="pt-20 p-10 flex flex-col gap-24 lg:pt-0 lg:px-40 lg:justify-center lg:h-screen"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <h1 className="text-5xl mb-4 py-8 font-marcellus">Projects</h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Project
          preview={plants}
          name="plants kingdom"
          tech="ReactJs Typescript"
          git="Plant-store"
          href="https://plants-kingdom.vercel.app/"
        />
        <Project
          preview={weather}
          name="Weather Cast"
          tech="NextJs RestApi"
          git="weather-cast"
          href="https://weathercasts.vercel.app/"
        />
        <Project
          preview={icarus}
          name="Nasa Icarus"
          tech="Js vanillaCSS"
          git="icarus"
          href="https://icarusnasa.netlify.app/#3"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
