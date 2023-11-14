import Dev from "@/components/Dev";
import quote from "../assets/quote.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
        className="lg:grid lg:grid-cols-2 pointer-events h-screen"
      >
        <div className="order-2 flex items-center justify-center">
          <Dev />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center lg:pl-16">
          <div className="p-5">
            <h1 className="text-2xl lg:text-3xl font-bold font-marcellus">
              I am Younes Khadraoui
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold font-marcellus">
              I am a web developer
            </h2>
          </div>
          <div className="p-5">
            <div className="flex gap-2">
              <Image className="h-10 w-10" src={quote} alt="quote image" />
              <div>
                <p className="text-lg lg:text-2xl">
                  Creativity is intelligence having fun
                </p>
                <p className="font-bold text-blue-400"> - Albert Einstein</p>
              </div>
            </div>
            <p className="pt-4">
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
