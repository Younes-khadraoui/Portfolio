import React from "react";
import plants from "@/assets/projects/plants.png";
import weather from "@/assets/projects/weather.png";
import Project from "@/components/project";
import books from "@/assets/projects/books.png";
import dzflavor from "@/assets/projects/dzflavor.png";
import Head from "next/head";

const Myprojects = () => {
  return (
    <div className="pt-20 p-10 flex flex-col gap-24 lg:pt-24 lg:px-40 lg:justify-center">
      <Head>
        <title>My Projects</title>
      </Head>
      <div>
        <h1 className="text-5xl mb-4 py-8 font-marcellus">My Projects</h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Project
          preview={dzflavor}
          name="DZFlavor"
          tech="ReactJs ExpressJs MongoDB"
          git="DZ-FLAVOR"
          href="https://dzflavor.vercel.app/"
        />
        <Project
          preview={weather}
          name="Weather Cast"
          tech="NextJs RestApi"
          git="weather-cast"
          href="https://weathercasts.vercel.app/"
        />
        <Project
          preview={books}
          name="First Chapter"
          tech="Qwik"
          git="First_Chapter"
          href="https://firstchapter.netlify.app/"
        />
        <Project
          preview={plants}
          name="plants kingdom"
          tech="ReactJs Typescript"
          git="Plant-store"
          href="https://plants-kingdom.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Myprojects;
