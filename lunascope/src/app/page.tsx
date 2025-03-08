import Image from "next/image";

export default function Science() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Section */}
      <header className="text-center py-8 border-b border-gray-700">
        <h1 className="text-5xl font-bold">The Science</h1>
      </header>

      {/* Vision & Mission Section */}
      <section className="max-w-6xl mx-auto mb-16 border-b border-gray-700 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <Image
              src="https://lunascope.org/wp-content/uploads/2023/06/moon-hand-catching-the-moon-darkness.jpeg"
              alt="Lunascope Logo"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right Side - Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              LunaSCOPE – a NASA Solar System Exploration Research Virtual Institute (SSERVI) team – is a pioneering research initiative aimed at comprehensively understanding the Moon and its potential for future human exploration. LunaSCOPE, hosted at Brown University, brings together a diverse and international team of lunar science and exploration scholars.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to advance the scientific understanding of the Moon, particularly in relation to its origin, evolution, and crucial in-situ resources. By conducting transformative research and cross-disciplinary investigations, LunaSCOPE seeks to contribute to the development of future human exploration and utilization of the Moon.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-lg">Read More</a>
          </div>
        </div>
      </section>

      {/* Research Themes Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Research Themes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Magma Oceans", description: "Understanding the differentiation of the lunar magma ocean to predict the spatial distribution of crucial resources.", image: "/path-to-magma-image.jpg" },
            { title: "Magnetism", description: "Investigating lunar magnetic fields to determine their effects on volatile loss rates and resource preservation.", image: "/path-to-magnetism-image.jpg" },
            { title: "Volcanism and Tectonism", description: "Studying the Moon’s magmatism to predict the distribution of resources on the surface.", image: "/path-to-volcanism-image.jpg" },
            { title: "Volatiles", description: "Examining the Moon’s degassing history and volatile deposits for future exploration.", image: "/path-to-volatiles-image.jpg" },
            { title: "Regolith and Impacts", description: "Characterizing lunar regolith to enhance exploration and mapping efforts.", image: "/path-to-regolith-image.jpg" },
          ].map((theme, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <Image src={theme.image} alt={theme.title} width={300} height={200} className="rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-300">{theme.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
