import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Science</h1>
          <p className="text-lg text-gray-300 mb-6">
          <h1 className="text-2xl font-bold mb-4">Vision & Mission</h1>
LunaSCOPE – a NASA Solar System Exploration Research Virtual Institute (SSERVI) team – is a pioneering research initiative aimed at comprehensively understanding the Moon and its potential for future human exploration. LunaSCOPE, hosted at Brown University, brings together a diverse and international team of lunar science and exploration scholars. Through interdisciplinary research and collaboration, we strive to unlock the mysteries of the Moon and pave the way for exciting future missions and discoveries.

Our mission is to advance the scientific understanding of the Moon, particularly in relation to its origin, evolution, and crucial in-situ resources. By conducting transformative research and cross-disciplinary investigations, LunaSCOPE seeks to contribute to the development of future human exploration and utilization of the Moon. We focus on the quantification and characterization of vital lunar resources, investigating the nature, distribution, and availability of these resources to support future lunar missions.
          </p>
          <a 
            href="#" 
            className="text-blue-400 hover:underline text-lg"
          >
            Read More
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image
            src="https://lunascope.org/wp-content/uploads/2023/06/moon-hand-catching-the-moon-darkness.jpeg"
            alt="Lunascope Moon Image"
            width={600} 
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
