"use client";

import Intro from "./_components/intro";
import ProfileGroup from "./_components/group";
import { teamData } from "./_components/teamdata";

import Footer from "@/components/Footer";
import Link from "next/link";

export default function TeamPage() {
  return (
    <main
      className="
        relative
        bg-black-100
        dark:bg-black-100
        dark:bg-grid-white/[0.03]
        bg-grid-black-100/[0.2]
        text-white
        flex justify-center items-center flex-col
        overflow-hidden
        mx-auto sm:px-10 px-5
      "
    >
      {/* Radial gradient background overlay */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"        
      />

      <div className="max-w-7xl w-full relative z-10">
        <Intro />

        <section id="team" className="w-full">
          {teamData.map((group) => (
            <ProfileGroup
              key={group.role}
              title={group.role}
              sizing={group.large}
              members={group.members}
            />
          ))}
        </section>
      </div>

      <Link href="/">
        <button className="absolute top-5 left-5 bg-gray-500 dark:bg-gray-500 p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </Link>

      <Footer />
    </main>
  );
}
