import me from "../assets/me.jpg";
import html from "../assets/html.png";
import ts from "../assets/ts.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <div className="pt-20 p-10 flex flex-col gap-16 lg:px-40 lg:pt-0 lg:h-screen lg:justify-center">
      <Head>
        <title>About</title>
      </Head>
      <div className="Title">
        <h1 className="text-5xl mb-4 py-8 font-marcellus ">About</h1>
        <hr className="lg:w-1/2" />
        MHead
      </div>
      {/* My description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="descreption">
          <p className="title text-3xl py-6 font-marcellus || xl:text-4xl">
            My Description
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              className="border-4 h-64 object-scale-down bg-white"
              src={me}
              alt="my picture"
            />
            <ul className="flex flex-col gap-6 || xl:text-lg">
              <li>
                I am <span className="font-bold text-blue-400">Younes </span>
                and I am a computer science student at the USTHB
              </li>
              <li>
                I am also a junior front-end developer . I like development
                because of the satisfaction I get from overcoming challenges
              </li>
              <li>I am very motivated to improve my knowledge and skills.</li>
            </ul>
          </div>
        </div>
        {/* My Skills */}
        <div className="mt-16 lg:mt-0">
          <p className="text-3xl py-6 font-marcellus || xl:text-4xl">
            My Skills
          </p>
          <div className="content flex  flex-col  gap-6 md:flex-row lg:flex-col">
            <ul className="flex flex-col gap-6 || xl:text-lg">
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
            <div className="flex h-16 justify-around flex-wrap gap-4">
              <Image className="w-16" src={html} alt="HTML" />
              <Image className="w-16" src={react} alt="react js" />
              <Image className="w-16" src={ts} alt="typesctipt" />
              <Image className="w-16" src={tailwind} alt="tailwind css" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
