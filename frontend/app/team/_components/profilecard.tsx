import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  institution: string;
  imageUrl: string;
  sizing: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, institution, imageUrl, sizing }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="
      bg-[rgba(17,25,40,0.75)]
      backdrop-blur-xl
      border border-[rgba(255,255,255,0.125)]
      rounded-3xl
      shadow-xl
      p-6
      flex flex-col items-center
      h-full
    "
  >
    <div className="relative w-24 h-24 mb-4">
      <Image
        src={imageUrl}
        alt={name}
        width={sizing ? 120 : 100}
        height={sizing ? 120 : 100}
        className={`
          ${sizing ? 'w-28 h-28' : 'w-24 h-24'}
          rounded-full 
          border-2 border-[#808080] 
          object-cover
          transition-all
          shadow-[0_0_15px_rgba(128,128,128,0.5)]
        `}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#808080] to-[#656565] opacity-20 blur-xl -z-10"/>
    </div>

    <h3 className="text-lg font-semibold text-white text-center">{name}</h3>
    <p className="text-sm text-[rgba(255,255,255,0.8)] text-center mt-1">{institution}</p>
  </motion.div>
);

export default ProfileCard;
