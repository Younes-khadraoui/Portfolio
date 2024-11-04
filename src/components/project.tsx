import React from "react";
import Image from "next/image";
import ExternalLink from "@/assets/link.png";
import Github from "@/assets/socials/github.png";
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
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-1 items-center">
              {git === '' ? <p className="px-2 py-1 text-red-500">Private Repo</p> :
                <a
                  className="hover:underline hover:font-bold px-2 py-1 xl:text-lg"
                  href={`https://github.com/Younes-khadraoui/${git}/`}
                  target="_blank"
                >
                  Code
                </a>
              }
              <Image src={Github} alt="github icon" width={25} height={25} className="transition-transform ease-in duration-200 hover:scale-110 pt-1" />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <a
                className="hover:underline hover:font-bold px-2 py-1 xl:text-lg"
                href={href}
                target="_blank"
              >
                Live preview
              </a>
              <Image src={ExternalLink} alt="external link icon" width={30} height={30} className="transition-transform ease-in duration-200 hover:scale-110" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Project;
