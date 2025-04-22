import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const Intro: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 text-center mt-20 mb-16 relative z-10">
    {/* Spotlight effects similar to Hero */}
    <div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="white"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="gray" />
    </div>
    
    {/* Grid background similar to Hero */}
    <div
      className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center -z-10"
    >
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>

    <TextGenerateEffect
      words="Meet the Team"
      className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-8"
    />
    <span className="text-[#808080] text-center text-[40px] md:text-5xl lg:text-6xl font-bold block -mt-8 mb-8">at LunaSCOPE</span>
    
    <Image
      src="/LNSCP_Team_LF.jpg"
      alt="Team"
      width={1728}
      height={802}
      className="w-full rounded-3xl shadow-2xl mb-8"
    />

    <p className="text-lg text-[rgba(255,255,255,0.8)] md:tracking-wider">
      LunaSCOPE team members hail from 20 different institutions in the U.S. and around the world, including three minority serving institutions and an HBCU. From undergraduates getting their first research experience to world‑renowned members of the planetary science field, LunaSCOPE is a diverse, dynamic and multidisciplinary collaboration.
    </p>
  </div>
);

export default Intro;
