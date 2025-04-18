import Intro from "./_components/intro";
import ProfileGroup from "./_components/group";
import { teamData } from "./_components/teamdata";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Intro />

        <section id="team" className="w-full py-20">
          <h1 className="heading text-center mb-16">
            Meet the <span className="text-purple">Team</span>
          </h1>

          {teamData.map((group) => (
            <ProfileGroup
              key={group.role}
              title={group.role}
              sizing={group.large}
              members={group.members}
            />
          ))}
        </section>
      </div>

      <footer className="bg-gray-500 w-full py-3 pl-12 mt-auto">
        <p>&copy; 2025 My Website</p>
      </footer>
    </main>
  );
}
