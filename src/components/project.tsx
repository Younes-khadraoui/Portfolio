import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Skill from "@/components/ui/skill";
import type { StaticImageData } from 'next/image';

const Project = ({ preview, name, tech, git, href }: { preview: StaticImageData, name: string, tech: string[], git: string, href: string }) => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShow(false); 
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';    
    }
    
    return () => {
      document.body.style.overflow = 'auto';    
    };
  }, [show]);

  return (
    <>
      <div onClick={() => setShow(!show)} className="relative bg-white cursor-pointer">
        <Image
          placeholder="blur"
          className="border-8 border-white"
          src={preview}
          alt={name}
        />
      </div>

      <div className={show ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" : "hidden"}>
        <div ref={ref} className="relative m-6 pt-4 text-white bg-[#1a1a1a] rounded-lg p-10 flex flex-col justify-center gap-4 shadow-sm shadow-white w-fit z-60">
          <p className="text-center font-marcellus text-2xl xl:text-3xl">
            {name}
          </p>
          <div className="flex gap-2 justify-center flex-wrap">
            {tech.map((skill) => <Skill key={skill} skill={skill} />)}
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-1 items-center">
              {git === '' ? <p className="px-2 py-1 text-red-400">Private Repo</p> :
                <a
                  className="hover:underline px-2 py-1 xl:text-lg"
                  href={`https://github.com/Younes-khadraoui/${git}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              }
              <Github className="pt-1" />
            </div>
            <div className="flex gap-1 items-center">
              <a
                className="hover:underline px-2 py-1 xl:text-lg"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live preview
              </a>
              <ExternalLink className="pt-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
