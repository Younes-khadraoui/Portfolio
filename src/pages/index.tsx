import Dev from "@/components/Dev";
import { motion } from "framer-motion";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <main>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
        className="pointer-events pt-6 || md:pt-0 || lg:h-screen lg:grid lg:grid-cols-2"
      >
        {/*  the dev animation  */}
        <div className="order-2 flex items-center justify-center">
          <Dev />
        </div>
        {/*  the text part   */}
        <div className="md:pl-32 || lg:flex lg:flex-col lg:justify-center lg:pl-16 || xl:pl-36">
          {/*  the titles */}
          <div className="p-5">
            <h1 className="text-2xl font-bold font-marcellus || lg:text-3xl || xl:text-4xl">
              I am Younes Khadraoui
            </h1>
            <h2 className="text-3xl font-bold font-marcellus || lg:text-4xl  || xl:text-5xl">
              I am a web developer
            </h2>
          </div>
          {/*  the quote and buttons   */}
          <div className="p-5">
            <div className="flex gap-2">
              <div className="pt-1">
                <Quote />
              </div>
              <div>
                <p className="text-lg  || lg:text-2xl || xl:text-3xl">
                  Creativity is intelligence having fun
                </p>
                <p className="font-bold text-blue-400 || xl:text-lg">
                  - Albert Einstein
                </p>
              </div>
            </div>
            <p className="pt-4 || xl:text-lg">
              Hello, cyber travelers! Buckle up for a whimsical ride through my
              digital universe!
            </p>
            <div className="py-5 ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.2,
                }}
                className="bg-white font-bold border-2 px-2 py-1 text-black  mr-5 cursor-default"
              >
                <Link href="/projects">My Projects</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.2,
                }}
                className="border-2 px-2 py-1 font-bold cursor-default"
              >
                <Link href="/contact">Contact Me</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
