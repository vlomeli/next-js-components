export function TeamMember1({ name, role, bio, imageUrl }) {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg shadow-lg p-6 m-4 max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
      />
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-2">
        {name}
      </h2>
      <p className="text-md text-center text-indigo-600 mb-4">{role}</p>
      <p className="text-gray-700 text-center">{bio}</p>
    </div>
  );
}

export default function TeamMembers1() {
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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Our Amazing Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {teamMembers.map((member, index) => (
          <TeamMember1 key={index} {...member} />
        ))}
      </div>
    </div>
  );
}