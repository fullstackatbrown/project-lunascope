import Intro from "./_components/intro";
import ProfileGroup from "./_components/group";
import { teamData } from "./_components/teamdata";

export default function TeamPage() {
  return (
    <main
      className="
        relative
        bg-[#13162D]
        text-white
        flex justify-center items-center flex-col
        overflow-hidden
        mx-auto sm:px-10 px-5
      "
    >
      <div className="max-w-7xl w-full">
        <Intro />

        <section id="team" className="w-full py-20">
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

      <footer className="w-full py-6 bg-[#13162D] text-[rgba(255,255,255,0.8)] text-center">
        <p>&copy; 2025 My Website</p>
      </footer>
    </main>
  );
}
