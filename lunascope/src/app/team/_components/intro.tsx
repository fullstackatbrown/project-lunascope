import Image from "next/image";

const Intro: React.FC = () => (
  <div className="max-w-4xl mx-auto text-center mt-20 mb-16 px-4">
    <h1 className="heading mb-8">Team</h1>

    <Image
      src="/LNSCP_Team_LF.jpg"
      alt="Team"
      width={1728}
      height={802}
      className="w-full rounded-3xl shadow-2xl mb-8"
    />

    <p className="text-lg text-gray-300">
      LunaSCOPE team members hail from 20 different institutions in the U.S. and around the world, including three minority serving institutions and an HBCU. From undergraduates getting their first research experience to world‑renowned members of the planetary science field, LunaSCOPE is a diverse, dynamic and multidisciplinary collaboration.
    </p>
  </div>
);

export default Intro;
