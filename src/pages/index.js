import TeamMembers1 from "../components/TeamMembers1";
import TeamMembers2 from "../components/TeamMembers2";
import TeamMembers3 from "../components/TeamMembers3";
import ButtonNumber1 from "../components/ButtonNumber1";
import ButtonNumber2 from "../components/ButtonNumber2";
import ButtonNumber3 from "../components/ButtonNumber3";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <TeamMembers1 />
      <TeamMembers2 />
      <TeamMembers3 />
      <div className="container mx-auto p-4 mt-8 bg-white">
        <div className="flex gap-10 items-center justify-center mb-8 mt-8">
          <ButtonNumber1 />
          <ButtonNumber2 />
          <ButtonNumber3 />
        </div>
      </div>
    </div>
  );
}