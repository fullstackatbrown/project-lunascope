import Image from "next/image";
import ProfileGroup from "./group"

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col pb-10 items-center gap-20 mx-32">
    <h1 className="text-7xl">Team</h1>
    <div className="">
        <Image 
        src="/LNSCP_Team_LF.jpg" 
        alt="Vercel logomark"
        width={1920}
        height={891}
        />
    </div>
    
    <h3 className="text-[20px] text-center">
        LunaSCOPE team members hail from 20 different institutions in the U.S. and around world, including three minority serving insitutions and an HBCU. From undergraduates getting their first research experience to world-renowned members of the planetary science field, LunaSCOPE is a diverse, dynamic and multidicsiplinary collaboration.
    </h3>
    </div>
  );
}


export default Intro
