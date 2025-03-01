"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ungradResearchImg from "../../public/ungrad_research_opp.png";


const AccordionItem = ({ title, content }: { title: string; content: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
  
    return (
      <div className="border-b border-gray-300 w-full">
        <button
          className="w-full flex justify-between items-center p-4 text-lg font-semibold hover:bg-gray-700 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{title}</span>
          <span className="text-2xl">{isOpen ? "−" : "+"}</span>
        </button>
  
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          }}
        >
          <div className="p-4 text-gray-500 bg-gray-50">
            {content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

const Jobs = () => {
  return (
    <div className="p-[150px] flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl font-extrabold">
        Undergraduate Research Opportunities
      </h1>
      <h2>
        LunaSCOPE offers undergraduate research fellowships throughout the year,
        including for summer 2026! For more information, or if you are
        interested in an undergraduate research opportunity with LunaSCOPE,
        please email{" "}
        <a href="" className="text-red-300">
          lunascope-staff@brown.edu
        </a>
        .
      </h2>

      <div className="flex items-center justify-center flex-row w-[100%]">
        <div className="w-[70%] pr-4 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold">
              The 9-week internships summer internships provide:
            </h2>
            <ul className="list-disc ml-6">
              <li>
                Hands-on research experience, with mentoring from Brown faculty
                in a supportive learning environment
              </li>
              <li>A $5400 stipend</li>
              <li>
                Professional development and graduate school/career guidance
              </li>
              <li>Social activities</li>
              <li>
                The opportunity to present your research at the Summer Research
                Symposium at Brown, and the possibility of presenting your
                research at a national science meeting such as the{" "}
                <a href="" className="text-red-300">
                  American Geophysical Union Fall Meeting
                </a>{" "}
                or{" "}
                <a href="" className="text-red-300">
                  Lunar and Planetary Sciences Conference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Requirements to Apply:</h2>
            <ul className="list-disc ml-6">
              <li>
                Must be a currently enrolled undergraduate student in semester
                preceding summer internship.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src={ungradResearchImg.src}
            alt="Image of a researcher"
            className="w-[100%]"
          />
        </div>
      </div>

      <div className="mt-[150px] w-[100%]">
        <h1 className="text-3xl font-extrabold">
          Sample summer research projects:
        </h1>
        <div className="w-full border rounded-lg overflow-hidden mt-14">
            <AccordionItem
            title="Investigating the Distribution of Volcanic Materials Beneath the Moon’s Surface"
            content={`Although the Moon’s surface is familiar to us, the processes shaping its hidden subsurface layers remain enigmatic. Recent high-resolution spacecraft data have allowed scientists to estimate volcanic material distributions within the Moon’s crust, specifically focusing on basalts. Surprisingly, these studies show that the nearside of the Moon—perpetually facing Earth—contains fewer subsurface basalts than the farside, despite having three times more total basalts from ancient lava flows on the surface.
            \n
            To better understand the geological processes that led to these differences, we propose a series of experiments and data analysis aimed at answering two central questions: (1) What mechanisms caused the nearside-farside asymmetry in the total volume of volcanic materials? (2) Why does the farside possess a greater volume of subsurface basalts despite the nearside’s surface dominance?
            \n
            Our approach will involve analog modeling and data comparison with lunar spacecraft observations. By simulating conditions within the Moon’s crust, this project will provide insights into the early processes that influenced the Moon’s volcanic history and its present-day structure. Understanding these dynamics is essential for unraveling the Moon’s complex geological evolution and contributes to broader planetary science.`}
            />

          <AccordionItem
            title="Investigating Elemental Distributions and Giant Impact Ejecta on the Moon"
            content={`The Moon’s surface has been dramatically altered by giant impacts. These collisions excavate material from deep within the lunar crust and mantle, redistributing it across vast distances—sometimes spanning hundreds or thousands of kilometers. As the ejecta from these impacts lands, it creates secondary craters and mixes with local lunar materials. The size of the original impact crater and the distance that the ejecta travels are key factors influencing the composition of the final deposits, affecting the ratio of ejecta material to local lunar materials.
            \n
            This project aims to examine the relationship between the surface distributions of iron oxide (FeO₂), titanium (Ti), and thorium (Th) on the Moon, particularly in relation to the ejecta from giant impacts such as the Orientale basin. By developing mathematical models of crater ejecta and analyzing compositional surface data, we will explore how these elements are distributed across the lunar surface and how they correlate with impact events. Students with experience in Python programming are highly encouraged to apply. This project is an excellent opportunity to enhance research and data analysis skills while contributing to our understanding of the Moon’s impact history and elemental composition.`}
          />
          <AccordionItem
            title="Efficiency of the Lunar Magma Ocean to Produce Chemical Differentiation"
            content="The Moon has undergone extreme chemical differentiation early in its history during a magma ocean stage. The cooling and crystallization of a magma ocean operates from the top-down and likely shifted from fast cooling and crystallization suddenly to slow cooling after a buoyant crust formed. The dynamics of melt-crystal separation,  fundamental to chemical differentiation, is significantly different during these two distinct stages. This project aims at studying the efficiency of the lunar magma ocean to produce the observed chemical differentiation. What is the relative contribution of these two stages, rapid cooling before the creation of a buoyant and stable crust and slow cooling after.  This project will be modeling based and the student involved will learn how to develop simple mass balance equations associated with the project and how to use computer models to solve them."
          />
          <AccordionItem
            title="Oxygen isotope systematics of the Earth, Moon and Mars"
            content={`Triple oxygen isotopes (18O/16O and 17O/16O) are a powerful tool for tracing terrestrial and planetary processes, and are widely used for meteorite classification. Despite significant work on the topic, based on oxygen isotopes, lunar meteorites and Apollo return samples are ambiguous in the degree of homogenization between Earth and the Moon-forming impactor ‘Theia’. Further, limited oxygen isotope data exists for a rapidly expanding group of recently discovered meteorites thought to have originated from Mars. As such, refining the expected variations and differences in the triple oxygen isotope composition of Earth, Moon and Mars has important implications for solar system evolution and is relevant for analyses of future return samples. 
            \n
            This project will involve compilation and re-normalization of all existing terrestrial (primarily igneous), lunar and martian triple oxygen isotope datasets from the literature and Meteoritical Bulletin, and mineral separation and analysis of meteorites for triple oxygen isotope composition in the Ibarra laboratory. In doing so we anticipate that the student will gain experience with dataset analysis, analytical methods in oxygen isotopes, and contribute to a growing body of work utilizing oxygen isotopes to study planetary processes.`}
          />
          <AccordionItem
            title="Looking for Water on the Moon: Mapping Rocks with Spectroscopy"
            content="There is great interest in seeking any signs of water on the Moon as NASA prepares to send humans. Remotely sensed data from telescopes and orbiters are under intense scrutiny to find the key signposts that point to where we might find those signs of water.  At Brown we are exploring a unique wavelength region using laboratory observations of Lunar and Earth samples to develop exploration tools. Interpretation of remotely sensed data requires laboratories to build understanding and new tools.  The student will work with faculty and students in analysis of laboratory data to quantitatively test algorithms and remotely sensed data seeking the signs of water."
          />
          <AccordionItem
            title="Assessing water resources on the Moon"
            content="The proposed project is to assess whether pyroclastic deposits on the Moon could act as water resources for future exploration and habitation. Water is a key resource for exploration of the Moon. The focus of the Artemis program on the lunar south pole is in large part driven by the discovery of water ice in permanently shadowed craters near the poles. However, the amount of water in these deposits may not be as large as previously thought, crater floors can be difficult to access and the polar environment is particularly difficult to work in. For these reasons, finding alternative sources of water on the Moon is desirable. In the project, the student would catalog the locations and volumes of pyroclastic deposits on the Moon and estimate the total amount of water contained in them. Using this information, along with other constraints on in-situ resource utilization (ISRU), the pyroclastic deposits will be ranked. If time allows, a concept mission could be developed to explore one of these deposits."
          />
          <AccordionItem
            title="Studying the Moon's formation and history through lunar meteorites"
            content="Every year, hundreds of meteorites fall to the Earth. A small number of these are actually pieces of the Moon, which were ejected by large impacts. The summer project will involve analyzing lunar meteorite samples using the electron microprobe housed in DEEPS. This device allows the sample to be imaged and chemically analyzed at the micron scale. The data will be compared with the existing lunar data, and used to interpret the formation and history of the Moon. Students will work closely with Prof. Stephen Parman and Dr. Joseph Boesenberg, and will get first-hand experience running the microprobe, reducing the data and interpreting the results. Students may get enough data over the summer to present a poster at the Lunar and Planetary Science Conference in Houston. A background in basic chemistry and math would be very useful, as would some knowledge of geology and mineralogy. This project could involve 1 or 2 students."
          />
          <AccordionItem
            title="Evolution of Lunar Surface revealed by impact cratering record"
            content={`Lunar mission landers operate directly on the Moon’s surface, making it essential to understand the composition and structure of lunar regolith (soil). This knowledge is critical in selecting landing sites for future missions, including NASA’s Artemis program, which aims to return humans to the Moon. In this project, we will analyze high-resolution images of the Moon to gain insights into the characteristics of the lunar regolith. On airless planetary bodies like the Moon, meteoroid impacts expose materials from beneath the surface. Therefore, small, newly-formed impact craters offer valuable information about the thickness and properties of the Moon’s upper crustal layers.
            \n
            Here, we plan to use fresh meter-sized impact crater shapes to infer regolith thickness on the Moon. You will help map fresh lunar craters across different geological units. Further, you will classify craters according to their morphological characteristics. You will use this dataset to infer the thickness and mechanical properties of the uppermost layers on the Moon. You will combine this information across various geological areas and help us understand the evolution of the lunar surface. Through this project, you will learn about the geology of the Moon and the physics of impact cratering processes, and you will gain skills in Geographical Information System (GIS) tools and remote sensing data analysis.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
