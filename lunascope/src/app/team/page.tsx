import { teamData } from "../_components/teamdata";
import Intro from "../_components/intro"
import ProfileGroup from "../_components/group"
import Navbar from "../_components/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col my-10 mx-10">
            <Intro />
            <div className="px-4 py-8">
                {teamData.map((group, index) => (
                <ProfileGroup key={index} sizing={group.large} title={group.role} members={group.members} />
                ))}
            </div>
        </div>
        </div>
    );
}
