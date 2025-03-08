"use client";
import React, { useState, useRef } from "react";

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="accordion-item">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-2xl">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div>
          {content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  return (
    <div className="publications-page">
      <header className="publicationsTitle">
        <h1>Publications</h1>
      </header>
      <section className="subheader2024">
        <h2>2024</h2>
      </section>

      <div className="accordion-container">
        {}
        <AccordionItem
          title="Vestiges of a lunar ilmenite layer following mantle overturn revealed by gravity data"
          content={`sample text`}
        />
        <AccordionItem
          title="Lunar Mare Lava Flow Dynamics and Emplacement: Predictions of Non-Newtonian Flow Dynamics, Syn- and Post-emplacement Cooling and Volatile Release Patterns, and Vertical and Lateral Flow Structure Development"
          content={`sample text`}
        />
        <AccordionItem
          title="'Spiders' on the Moon: Morphological Evidence for Geologically Recent Regolith Drainage into Subsurface Voids"
          content={`sample text`}
        />
        <AccordionItem
          title="Geological mapping and chronology of lunar landing sites: Apollo 14"
          content={`sample text`}
        />
        <AccordionItem
          title="Characterization of High-priority Landing Sites for Robotic Exploration Missions in the Apollo Basin, Moon"
          content={`sample text`}
        />
        <AccordionItem
          title="How old are lunar lobate scarps? 2. Distribution in space and time"
          content={`sample text`}
        />
        <AccordionItem
          title="Global Distribution and Volume of Cryptomare and Visible Mare on the Moon From Gravity and Dark Halo Craters"
          content={`sample text`}
        />
        <AccordionItem
          title="The Spectral Characteristics of Lunar Agglutinates: Visible–Near-Infrared Spectroscopy of Apollo Soil Separates"
          content={`sample text`}
        />
        <AccordionItem
          title="Variations in surface adsorbed H2O on lunar soils and relevant minerals"
          content={`sample text`}
        />
      </div>
    </div>
  );
};



export default Publications;