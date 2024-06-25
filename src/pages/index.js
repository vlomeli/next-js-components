import TeamMember from "../components/TeamMembers1";

export default function Home() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      bio: "Alice loves creating beautiful user interfaces and has 5 years of experience in React.",
      imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      bio: "Bob is passionate about scalable architecture and has expertise in Node.js and databases.",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Carol Williams",
      role: "UX Designer",
      bio: "Carol has a keen eye for user-centric design and brings 7 years of UX/UI experience to the team.",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          Our Amazing Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}