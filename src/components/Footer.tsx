import { Minus, Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex gap-2 items-center justify-center py-8 lg:absolute lg:left-0 lg:top-0 lg:flex-col lg:p-4 lg:h-screen lg:w-20 lg:gap-10 ">
      <div className=" flex gap-2 lg:transform lg:rotate-90 lg:pr-6 text-2xl lg:text-lg font-bold xl:text-2xl">
        <p>Follow</p>
        <p>me</p>
      </div>
      <div className="flex items-center  lg:items-center">
        <Minus className="w-10 lg:transform lg:rotate-90" />
      </div>
      <ul className=" flex gap-2 lg:flex-col lg:items-center lg:w-10">
        <li>
          <Link
            href="https://github.com/Younes-khadraoui"
            target="_blank"
            title="github"
          >
            <Github />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/younes-khadraoui/"
            target="_blank"
            title="Linkedin"
          >
            <Linkedin />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/younes_khx_/"
            target="_blank"
            title="Linkedin"
          >
            <Instagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
