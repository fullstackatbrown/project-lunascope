"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Groups from "@/components/Groups";
import Events from "@/components/Events";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import TestimonialForm from "@/components/TestimonialForm";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Clients />
        <TestimonialForm />
        <Events />
        <Groups />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
