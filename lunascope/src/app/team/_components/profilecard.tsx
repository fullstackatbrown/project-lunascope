import React from "react";
import Image from 'next/image'
interface ProfileCardProps {
    name: string;
    institution: string;
    imageUrl: string;
    sizing: boolean;
  }
  
const ProfileCard: React.FC<ProfileCardProps> = ({ name, institution, imageUrl, sizing }) => {
    const size : string = (sizing ? "w-48" : "w-48")
    const imageSize : string = (sizing ? "w-40" : "w-40")
    return (
        <div className={`${size}  text-center p-4 shadow-lg flex grow basis-3xs flex-col items-center`}>
            <div>
                <Image 
                    src={imageUrl} 
                    alt="Vercel logomark"
                    width={225}
                    height={225}
                    className={`${imageSize} h-auto rounded-full`}
                />
            </div>
            
            <h3 className="mt-3 text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-300">{institution}</p>
        </div>
    );
};

export default ProfileCard;