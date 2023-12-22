import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Project = ({ preview, name, tech }) => {
  return (
    <div className="relative bg-white">
      <Image
        className="border-8 border-white"
        src={preview}
        alt="my weather website"
      />
      <div className="content opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60  flex flex-col justify-center gap-4 ">
        <p className="text-center font-marcellus text-2xl">{name}</p>
        <p className="font-bold text-center">{tech}</p>
        <div className="flex gap-4 justify-center">
          <div className="flex gap-1">
            <a
              className="hover:underline px-2 py-1"
              href="https://github.com/Younes-khadraoui/Weather-app"
              target="_blank"
            >
              Code
            </a>
            <Github />
          </div>
          <div className="flex gap-1">
            <a
              className="hover:underline px-2 py-1"
              href="https://weathercasts.vercel.app/"
              target="_blank"
            >
              Live preview
            </a>
            <ExternalLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
