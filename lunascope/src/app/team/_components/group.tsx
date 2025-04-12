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
      <div className="flex flex-col border-t-2 border-gray-300 pt-20 pb-20 gap-5 ">
        <h2 className="text-[36px] font-bold mb-4 text-center">{title}</h2>
        <div className="mx-28 flex flex-wrap justify-around gap-20">
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