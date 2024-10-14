import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Skill from "@/components/ui/skill";
import type { StaticImageData } from 'next/image';

const Project = ({ preview, name, tech, git, href }: { preview: StaticImageData, name: string, tech: string[], git: string, href: string }) => {
  return (
    <div className="relative bg-white">
        <Image
          placeholder="blur"
          className="border-8 border-white"
          src={preview}
          alt={name}
        />

      <div className="opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 m-6 p-2 pt-4 bg-black bg-opacity-60  flex flex-col justify-center gap-4">
          <p className="text-center font-marcellus text-2xl xl:text-3xl">
            {name}
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {tech.map((skill) => <Skill key={skill} skill={skill} />)}
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-1">
              {git === '' ? <p className="px-2 py-1 text-red-500">Private Repo</p> :
                <a
                  className="hover:underline px-2 py-1 xl:text-lg"
                  href={`https://github.com/Younes-khadraoui/${git}/`}
                  target="_blank"
                >
                  Code
                </a>
              }
              <Github className="pt-1" />
            </div>
            <div className="flex gap-1">
              <a
                className="hover:underline px-2 py-1 xl:text-lg"
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
