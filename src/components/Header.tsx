import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const [Icon, setIcon] = useState(true);
  const navStyle = {
    className: `font-bold lg:gap-4 lg:text-2xl lg:flex lg:justify-center cursor-default ${
      toggled
        ? "bg-black bg-opacity-90 flex fixed bottom-0 left-0 flex-col w-full h-screen gap-14 text-3xl justify-center items-center lg:hidden"
        : "Links hidden lg:flex"
    }`,
  };

  return (
    <motion.div
      className="Header flex absolute w-full justify-between items-center px-3 z-10 py-4 lg:px-4 font-marcellus"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/" className="text-4xl sm:text-5xl z-20 || xl:text-6xl">
        <motion.p
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="font-tinos outline-none hover:text-[#42A5F5]"
        >
          <span>Y</span>
          <span className="hover:text-white">ounes</span>
        </motion.p>
      </Link>

      <ul className={navStyle.className}>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/" className="xl:text-3xl">
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/projects" className="xl:text-3xl">
            Projects
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/about" className="xl:text-3xl">
            About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            duration: 0.3,
          }}
          onClick={() => {
            toggled ? setToggled(false) : null;
            setIcon(Icon == false ? true : false);
          }}
        >
          <Link href="/contact" className="xl:text-3xl">
            Contact
          </Link>
        </motion.li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          duration: 0.3,
        }}
        className="flex justify-end z-20 || lg:hidden"
        onClick={() => {
          setToggled(!toggled);
          setIcon(Icon == false ? true : false);
        }}
      >
        {Icon ? <Menu size={45} /> : <X size={45} />}
      </motion.button>
    </motion.div>
  );
};

export default Header;
