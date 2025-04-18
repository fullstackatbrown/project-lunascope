import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  institution: string;
  imageUrl: string;
  sizing: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  institution,
  imageUrl,
  sizing,
}) => (
    <div className="
    bg-white/20
    dark:bg-gray-800
    border border-black/[0.1]
    rounded-3xl
    shadow-xl
    p-6
    flex flex-col items-center
  ">
    <Image
      src={imageUrl}
      alt={name}
      width={100}
      height={100}
      className="w-24 h-24 rounded-full border-2 border-black/[0.1] mb-4 object-cover"
    />

    <h3 className="text-lg font-semibold text-white">{name}</h3>
    <p className="text-sm text-gray-400">{institution}</p>
  </div>
);

export default ProfileCard;
