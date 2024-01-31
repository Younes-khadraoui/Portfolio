import plants from "../assets/plants.png";
import weather from "../assets/weather.png";
import icarus from "../assets/icarus.png";
import { motion } from "framer-motion";
import Project from "@/components/project";

const Projects = () => {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      className="pt-20 p-10 flex flex-col gap-24 lg:pt-0 lg:px-40 lg:justify-center lg:h-screen"
    >
      <div className="Title">
        <h1 className="text-5xl mb-4 py-8 font-marcellus">Projects</h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Project
          preview={plants}
          name="plants kingdom"
          tech="ReactJs Typescript"
          git="Plant-store"
          href="https://plant-kingdom.netlify.app/"
        />
        <Project
          preview={weather}
          name="Weather Cast"
          tech="ReactJs RestApi"
          git="WeatherCast"
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
