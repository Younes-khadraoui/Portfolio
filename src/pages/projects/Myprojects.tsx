import React from "react";
import plants from "@/assets/plants.png";
import weather from "@/assets/weather.png";
import Project from "@/components/project";
import books from "@/assets/books.png";
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
          preview={plants}
          name="plants kingdom"
          tech="ReactJs Typescript"
          git="Plant-store"
          href="https://plants-kingdom.vercel.app/"
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
          href="https://firstchapter.pages.dev/"
        />
      </div>
    </div>
  );
};

export default Myprojects;