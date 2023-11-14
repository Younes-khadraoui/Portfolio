import me from "../assets/me.jpg";
import html from "../assets/html.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      className="pt-20 p-10 flex flex-col gap-16 lg:pl-20"
    >
      <div className="Title">
        <h1 className="text-5xl mb-4 py-8 font-marcellus">About</h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="descreption">
          <p className="title text-3xl py-6 font-marcellus">My Description</p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              className="border-4 h-64 object-scale-down bg-white"
              src={me}
              alt=""
            />
            <ul className="flex flex-col gap-6">
              <li>
                I am <span className="font-bold text-blue-400">Younes </span>
                and I am a computer science student at the USTHB
              </li>
              <li>
                I'm also a junior front-end developer . I like development
                because of the satisfaction I get from overcoming challenges
              </li>
              <li>I am very motivated to improve my knowledge and skills.</li>
            </ul>
          </div>
        </div>
        <div className="skills mt-16 lg:mt-0">
          <p className="text-3xl py-6 font-marcellus">My Skills</p>
          <div className="content flex flex-col gap-6">
            <ul className="flex flex-col gap-6">
              <li>Most of these skills are self learned skills </li>
              <li>
                I spend most of my time trying to learn something new and i
                consider myself as a lifelong learner .
              </li>
              <li>
                These are the skills i master the most but there is more that
                you can find about in my linkedin profile
              </li>
            </ul>
            <div className="flex h-16 justify-between">
              <Image className="w-16" src={html} alt="HTML" />
              <Image className="w-16" src={react} alt="react js" />
              <Image className="w-16" src={ts} alt="typesctipt" />
              <Image className="w-16" src={tailwind} alt="tailwind css" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
