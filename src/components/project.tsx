import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const Project = ({ preview, name, tech, git, href }) => {
  return (
    <div className="relative bg-white">
      <Image
        placeholder="blur"
        className="border-8 border-white"
        src={preview}
        alt="my weather website"
      />
      <div className=" opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60  flex flex-col justify-center gap-4 ">
        <p className="text-center font-marcellus text-2xl || xl:text-3xl">
          {name}
        </p>
        <p className="font-bold text-center || xl:text-xl">{tech}</p>
        <div className="flex gap-4 justify-center">
          <div className="flex gap-1">
            <a
              className="hover:underline px-2 py-1 || xl:text-lg"
              href={`https://github.com/Younes-khadraoui/${git}/`}
              target="_blank"
            >
              Code
            </a>
            <Github className="pt-1" />
          </div>
          <div className="flex gap-1">
            <a
              className="hover:underline px-2 py-1  || xl:text-lg"
              href={href}
              target="_blank"
            >
              Live preview
            </a>
            <ExternalLink className="pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
