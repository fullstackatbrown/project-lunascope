"use client"
import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Events from "@/components/Events";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { getMoonImage } from "@/lib/cosmicClient";

const Home = async () => {
  const moonImage = await getMoonImage();

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        
        {moonImage ? (
        <div className="relative w-full max-w-2xl aspect-square">
          <img src={moonImage.metadata.moon_image.imgix_url} />
        </div>
      ) : (
        <p>Loading moon image...</p>
      )}
        {/* <Hero />
        <Grid />
        <Clients />
        <Events />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;