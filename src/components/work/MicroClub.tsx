import React from "react";
import qrcode from "@/assets/work/qrcode.png";
import icarus from "@/assets/work/icarus.png";
import Project from "@/components/project";

const MicroClub = () => {
  return (
    <div className="p-10 flex flex-col gap-24 lg:pt-0 lg:px-40 lg:justify-center">
      <div>
        <h1 className="text-5xl mb-4 py-8 font-marcellus">
          Micro Club
        </h1>
        <hr className="lg:w-1/2" />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] xl:grid-cols-3 gap-5 ">
        <Project
          preview={qrcode}
          name="Qr code generator"
          tech={["reactJs", "javascript"]}
          git=""
          href="https://registration-form-one-fawn.vercel.app/"
        />
        <Project
          preview={icarus}
          name="Nasa Icarus"
          tech={["javascript", "vanillaCSS"]}
          git="icarus"
          href="https://icarusnasa.netlify.app/#3"
        />
      </div>
    </div>
  );
};

export default MicroClub;
