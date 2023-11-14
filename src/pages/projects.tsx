import github from "../assets/github.svg";
import goto from "../assets/goto.svg";
import plants from "../assets/plants.png";
import weather from "../assets/weather.png";
import icarus from "../assets/icarus.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = () => {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      className="pt-20 p-10 flex flex-col gap-24 lg:pl-20"
    >
      <div className="Title">
        <h1 className="text-5xl mb-4 py-8 font-marcellus">Projects</h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="projects grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="1project relative bg-white">
          <Image className="border-8 border-white" src={plants} alt="" />
          <div className="content opacity-0 hover:opacity-100 transition-opacity duration-500  absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60 flex flex-col justify-center gap-4 ">
            <p className="text-center font-marcellus text-2xl">
              Plants Kingdom
            </p>
            <p className="font-bold text-center">ReactJs Typescript</p>
            <div className="flex gap-4 justify-center">
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://github.com/Younes-khadraoui/Plant-store"
                  target="_blank"
                >
                  Code
                </a>
                <Image src={github} alt="github" />
              </div>
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://plant-kingdom.netlify.app/"
                  target="_blank"
                >
                  Live preview
                </a>
                <Image className="w-6" src={goto} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="2project relative bg-white">
          <Image
            className="border-8 border-white"
            src={weather}
            alt="my weather website"
          />
          <div className="content opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60  flex flex-col justify-center gap-4 ">
            <p className="text-center font-marcellus text-2xl">Weather Cast</p>
            <p className="font-bold text-center">ReactJs RestApi</p>
            <div className="flex gap-4 justify-center">
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://github.com/Younes-khadraoui/Weather-app"
                  target="_blank"
                >
                  Code
                </a>
                <Image src={github} alt="github" />
              </div>
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://weathercasts.vercel.app/"
                  target="_blank"
                >
                  Live preview
                </a>
                <Image className="w-6" src={goto} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="3project relative bg-white">
          <Image className="border-8 border-white" src={icarus} alt="" />
          <div className="content opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60  flex flex-col justify-center gap-4 ">
            <p className="text-center font-marcellus text-2xl">Nasa Icarus</p>
            <p className="font-bold text-center">JS vanillaCSS</p>
            <div className="flex gap-4 justify-center">
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://github.com/Younes-khadraoui/icarus"
                  target="_blank"
                >
                  Code
                </a>
                <Image src={github} alt="github" />
              </div>
              <div className="flex gap-1">
                <a
                  className="hover:underline px-2 py-1"
                  href="https://icarusnasa.netlify.app/#3"
                  target="_blank"
                >
                  Live preview
                </a>
                <Image className="w-6" src={goto} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
