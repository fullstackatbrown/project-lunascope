import { teamData } from "./_components/teamdata";
import Intro from "./_components/intro"
import ProfileGroup from "./_components/group"

export default function Home() {
    return (
        <div>
            <div className="flex flex-col my-10 mx-10">
                <Intro />
                <div className="px-4 py-8">
                    {teamData.map((group, index) => (
                    <ProfileGroup key={index} sizing={group.large} title={group.role} members={group.members} />
                    ))}
                </div>
            </div>
            <footer className="bg-gray-500 w-full py-3 pl-12 mt-auto">
                <p>&copy; 2025 My Website</p>
            </footer>
        </div>
    );
}
