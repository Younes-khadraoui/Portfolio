import Link from "next/link";
import { Quote } from "lucide-react";
import Head from "next/head";
import dev from "@/assets/dev.json";
import dynamic from "next/dynamic";

export default function Home() {
  const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
  return (
    <main>
      <Head>
        <title>Younes</title>
      </Head>
      <div className="pointer-events pt-6  md:pt-0  lg:h-screen lg:grid lg:grid-cols-2">
        <div className="order-2 flex items-center justify-center min-h-[350px] sm:min-h-[500px]">
          <DynamicLottie animationData={dev} loop={true} />
        </div>
        <div className="md:pl-32 lg:flex lg:flex-col lg:justify-center lg:pl-16 xl:pl-36">
          <div className="p-5">
            <h1 className="text-2xl font-bold font-marcellus lg:text-3xl xl:text-4xl">
              I am Younes Khadraoui
            </h1>
            <h2 className="text-3xl font-bold font-marcellus lg:text-4xl  xl:text-5xl">
              I am a web developer
            </h2>
          </div>
          <div className="p-5">
            <div className="flex gap-2">
              <div className="pt-1">
                <Quote />
              </div>
              <div>
                <p className="text-lg  lg:text-2xl xl:text-3xl">
                  Creativity is intelligence having fun
                </p>
                <p className="font-bold text-blue-400 xl:text-lg">
                  - Albert Einstein
                </p>
              </div>
            </div>
            <p className="pt-4 xl:text-lg">
              Hello, cyber travelers! Buckle up for a whimsical ride through my
              digital universe!
            </p>
            <div className="py-5">
              <button className="transition-transform ease-in duration-200 hover:scale-110">
                <Link className="bg-white font-bold border-2  px-2 py-2 rounded-md text-black mr-5" href="/projects">My Projects</Link>
              </button>
              <button className="transition-transform ease-in duration-200 hover:scale-110">
                <Link className="border-2 px-2 py-2  rounded-md font-bold" href="/contact">Contact Me</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
