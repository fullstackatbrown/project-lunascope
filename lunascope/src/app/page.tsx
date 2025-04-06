import { teamData } from "../app/_components/teamdata";
import Intro from "../app/_components/intro"
import ProfileGroup from "../app/_components/group"

export default function Home() {
    return (
      <div className="flex flex-col my-10 mx-10">
        <Intro />
        <div className="px-4 py-8">
            {teamData.map((group, index) => (
            <ProfileGroup key={index} sizing={group.large} title={group.role} members={group.members} />
            ))}
        </div>
      </div>
      
    );
}
