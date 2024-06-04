import React from "react";
import qrcode from "@/assets/qrcode.png";
import icarus from "@/assets/icarus.png";
import Project from "@/components/project";

const Allprojects = () => {
  return (
    <div className="p-10 flex flex-col gap-24 lg:pt-0 lg:px-40 lg:justify-center">
      <div>
        <h1 className="text-5xl mb-4 py-8 font-marcellus">
          Projects I Worked On
        </h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Project
          preview={qrcode}
          name="Qr code generator"
          tech="reactJs javascript"
          git="Qr code generator"
          href="https://registration-form-one-fawn.vercel.app/"
        />
        <Project
          preview={icarus}
          name="Nasa Icarus"
          tech="Js vanillaCSS"
          git="icarus"
          href="https://icarusnasa.netlify.app/#3"
        />
      </div>
    </div>
  );
};

export default Allprojects;
