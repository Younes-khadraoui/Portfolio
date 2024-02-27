import { motion } from "framer-motion";
import { Minus, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-2 items-center justify-center py-8 || lg:absolute lg:left-0 lg:top-0 lg:flex-col lg:p-4 lg:h-screen lg:w-20 lg:gap-10 "
    >
      <div className="Follow flex gap-2 || lg:transform lg:rotate-90 lg:pr-6">
        <p className="text-xl lg:text-lg font-bold || xl:text-2xl">Follow</p>
        <p className="text-xl lg:text-lg font-bold || xl:text-2xl">me</p>
      </div>
      <div className="flex items-center || lg:items-center">
        <Minus className="w-10 lg:transform lg:rotate-90" />
      </div>
      <ul className="Socials flex gap-2 || lg:flex-col lg:items-center lg:w-10">
        <motion.li
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.2,
          }}
        >
          <a
            href="https://github.com/Younes-khadraoui"
            target="_blank"
            title="github"
          >
            <Github />
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.2,
          }}
        >
          <a
            href="https://www.linkedin.com/in/younes-khadraoui/"
            target="_blank"
            title="Linkedin"
          >
            <Linkedin />
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Footer;
