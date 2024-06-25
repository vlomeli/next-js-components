import TeamMembers1 from "../components/TeamMembers1";
import TeamMembers2 from "../components/TeamMembers2";
import TeamMembers3 from "../components/TeamMembers3";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <TeamMembers1 />
      <TeamMembers2 />
      <TeamMembers3 />
    </div>
  );
}