import { teamData } from "../app/_components/teamdata";
import Intro from "../app/_components/intro"
import ProfileGroup from "../app/_components/group"

export default function Home() {
    return (
      <div className="flex flex-col mx-32 my-10 gap-20">
        <Intro />
        <div className="container mx-auto px-4 py-8">
            {teamData.map((group, index) => (
            <ProfileGroup key={index} sizing={group.large} title={group.role} members={group.members} />
            ))}
        </div>
      </div>
      
    );
}
