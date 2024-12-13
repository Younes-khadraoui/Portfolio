import Dezirium from "@/components/work/Dezirium";
import Myprojects from "@/components/work/Myprojects";
import MicroClub from "@/components/work/MicroClub";
import Head from "next/head";

const Work = () => {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Work</title>
      </Head>
      <Myprojects />
      <Dezirium />
      <MicroClub />
    </div>
  );
};

export default Work;
