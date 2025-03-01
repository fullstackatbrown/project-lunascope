import React from "react";

interface ProfileCardProps {
    name: string;
    institution: string;
    imageUrl: string;
    sizing: boolean;
  }
  
const ProfileCard: React.FC<ProfileCardProps> = ({ name, institution, imageUrl, sizing }) => {
    const size = (sizing ? "w-64" : "w-48")
    return (
        <div className={`${size} text-center p-4 shadow-lg`}>
            <img src={imageUrl} alt={name} className="w-full h-auto rounded-full" />
            <h3 className="mt-3 text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{institution}</p>
        </div>
    );
};

export default ProfileCard;