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

const ProfileGroup: React.FC<ProfileGroupProps> = ({ title, sizing, members }) => (
  <div className="border-t border-black/[0.2] pt-16 pb-16">
    <h2 className="heading text-center mb-12">{title}</h2>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default ProfileGroup;
