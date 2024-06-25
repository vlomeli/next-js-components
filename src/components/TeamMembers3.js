import { useState } from "react";

function TeamMember3({ name, role, bio, imageUrl, skills }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-72 h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-xl overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-2/3 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-sm text-pink-100">{role}</p>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <p className="text-sm text-purple-100 mb-4">{bio}</p>
              <h4 className="text-lg font-semibold text-white mb-2">Skills:</h4>
              <ul className="list-disc list-inside text-sm text-purple-100">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-purple-200 italic">Hover to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamMembers3() {
  const teamMembers = [
    {
      name: "Zoe Chen",
      role: "Full Stack Developer",
      bio: "Zoe is a coding polyglot with a passion for creating seamless user experiences across the entire stack.",
      imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      skills: ["React", "Node.js", "Python", "AWS"],
    },
    {
      name: "Raj Patel",
      role: "UI/UX Designer",
      bio: "Raj combines aesthetics with functionality to create intuitive and beautiful interfaces.",
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    },
    {
      name: "Lena Kim",
      role: "Data Scientist",
      bio: "Lena turns complex data into actionable insights, driving data-informed decisions across the company.",
      imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
      skills: ["Machine Learning", "Python", "R", "Data Visualization"],
    },
    {
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      bio: "Marcus ensures smooth operations and rapid deployment, keeping our infrastructure robust and scalable.",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Platforms"],
    },
    {
      name: "Sofia Rodriguez",
      role: "Product Manager",
      bio: "Sofia translates user needs into product features, guiding our development roadmap with strategic vision.",
      imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
      skills: [
        "Agile Methodologies",
        "Market Research",
        "Strategic Planning",
        "User Stories",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Our Stellar Team
        </h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
          <div className="flex overflow-x-auto pb-8 scrollbar">
            <div className="flex space-x-6 px-4">
              {teamMembers.map((member, index) => (
                <TeamMember3 key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
