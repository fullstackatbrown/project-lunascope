import React from "react";
import ProfileCard from "./profilecard";

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

const ProfileGroup: React.FC<ProfileGroupProps> = ({ title, sizing, members }) => {
    return (
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <ProfileCard 
              key={index} 
              name={member.name} 
              institution={member.institution} 
              imageUrl={member.imageUrl} 
              sizing={sizing}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default ProfileGroup;