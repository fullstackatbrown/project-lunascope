import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  institution: string;
  imageUrl: string;
  sizing: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, institution, imageUrl }) => (
  <div
    className="
      bg-[#13162D]             /* same panel background */
      dark:bg-[#1F202C]        /* fallback if you ever use dark mode */
      border border-[#1F202C]  /* border matching the panel */
      rounded-3xl
      shadow-xl
      p-6
      flex flex-col items-center
      transition-transform duration-300
      hover:scale-105 hover:shadow-2xl hover:bg-[rgba(255,255,255,0.1)]
    "
  >
    <Image
      src={imageUrl}
      alt={name}
      width={100}
      height={100}
      className="w-24 h-24 rounded-full border-2 border-[#1F202C] mb-4 object-cover"
    />

    <h3 className="text-lg font-semibold text-white">{name}</h3>
    <p className="text-sm text-[rgba(255,255,255,0.8)]">{institution}</p>
  </div>
);

export default ProfileCard;
