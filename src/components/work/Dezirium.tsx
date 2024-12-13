import React from "react";
import wadjed from "@/assets/work/wadjed.png";
import Project from "@/components/project";

const Dezirium = () => {
  return (
    <div className="p-10 flex flex-col gap-24 lg:pt-0 lg:px-40 lg:justify-center">
    <div>
      <h1 className="text-5xl mb-4 py-8 font-marcellus">
        Dezirium 
      </h1>
      <hr className="lg:w-1/2" />
    </div>

    <div className="grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] xl:grid-cols-3 gap-5 ">
      <Project
        preview={wadjed}
        name="Wadjed"
        tech={["Golang", "HTMX", "AlpineJs", "Tailwindcss"]}
        git=""
        href="https://wadjed.com"
      />
    </div>
  </div>
  );
};

export default Dezirium;
