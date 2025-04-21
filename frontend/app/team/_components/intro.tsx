import Image from "next/image";

const Intro: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 text-center mt-20 mb-16">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
      Meet the <span className="text-[#CBACF9]">Team</span>
    </h1>

    <Image
      src="/LNSCP_Team_LF.jpg"
      alt="Team"
      width={1728}
      height={802}
      className="w-full rounded-3xl shadow-2xl mb-8"
    />

    <p className="text-lg text-[rgba(255,255,255,0.8)]">
      LunaSCOPE team members hail from 20 different institutions in the U.S. and around the world, including three minority serving institutions and an HBCU. From undergraduates getting their first research experience to world‑renowned members of the planetary science field, LunaSCOPE is a diverse, dynamic and multidisciplinary collaboration.
    </p>
  </div>
);

export default Intro;
