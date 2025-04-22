import React from "react";
import ProfileCard from "./profilecard";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

interface Profile {
  name: string;
  institution: string;
  imageUrl: string;
}

interface ProfileGroupProps {
  title: string;
  sizing: boolean;
  members: Profile[];
}

const ProfileGroup: React.FC<ProfileGroupProps> = ({ title, sizing, members }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className="border-t border-[rgba(255,255,255,0.1)] pt-20 pb-20 relative"
  >
    <div className="absolute w-[50%] h-[1px] left-[25%] top-0 bg-gradient-to-r from-transparent via-[#808080] to-transparent" />
    
    <TextGenerateEffect
      words={title}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
    />

    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {members.map((member, index) => (
        <ProfileCard
          key={index}
          name={member.name}
          institution={member.institution}
          imageUrl={member.imageUrl}
          sizing={sizing}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default ProfileGroup;
