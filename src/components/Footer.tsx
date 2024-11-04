import Link from "next/link";
import Image from "next/image";
import Github from "@/assets/socials/github.png"
import Linkedin from "@/assets/socials/linkedin.png"
import Medium from "@/assets/socials/medium.png"
import Minus from "@/assets/socials/minus.png"

const Footer = () => {
  return (
    <div className="flex gap-4 items-center justify-center py-8 lg:absolute lg:left-0 lg:top-0 lg:flex-col lg:p-4 lg:h-screen lg:w-20 lg:gap-10">
      <div className="flex gap-2 lg:transform lg:rotate-90 lg:pr-6 text-2xl lg:text-lg font-extrabold xl:text-2xl">
        <p>Follow</p>
        <p>me</p>
      </div>
      <div className="flex items-center  lg:items-center">
        <Image src={Minus} alt="minus icon" width={20} height={20} className="w-8 lg:transform lg:rotate-90" />
      </div>
      <ul className="flex gap-2 lg:flex-col lg:items-center lg:w-8">
        <li>
          <Link
            href="https://github.com/Younes-khadraoui"
            target="_blank"
            title="github"
          >
             <Image src={Github} alt="github icon" width={25} height={25} className="transition-transform ease-in duration-200 hover:scale-110"/> 
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/younes-khadraoui/"
            target="_blank"
            title="Linkedin"
          >
              <Image src={Linkedin} alt="linkedin icon" width={25} height={25} className="transition-transform ease-in duration-200 hover:scale-110"/> 
          </Link>
        </li>
        <li>
          <Link
            href="https://medium.com/@younes_khx"
            target="_blank"
            title="Linkedin"
          >
           <Image src={Medium} alt="medium icon" width={25} height={25} className="transition-transform ease-in duration-200 hover:scale-110"/> 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
