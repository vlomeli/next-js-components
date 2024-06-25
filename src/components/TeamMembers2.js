import { useState } from "react";

function TeamMember2({ name, role, bio, imageUrl, quote }) {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow-xl overflow-hidden">
      <div className="flex flex-col justify-between p-6 lg:py-8 lg:px-7 h-full">
        <div className="flex-1 mb-4">
          <div className="flex items-start">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-indigo-400 flex-shrink-0"
            >
              <path
                fill="currentColor"
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
              ></path>
            </svg>
            <blockquote className="ml-4 text-lg font-medium text-gray-900">
              {quote}
            </blockquote>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <img src={imageUrl} alt={name} className="h-14 w-14 rounded-full" />
          </div>
          <div className="ml-4">
            <div className="text-base font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamMembers2() {
  const teamMembers = [
    {
      name: "Grace Lee",
      role: "AI Researcher",
      bio: "Grace is pushing the boundaries of AI and machine learning.",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      quote:
        "Our team's diverse expertise allows us to tackle complex AI challenges with innovative solutions.",
    },
    {
      name: "Hassan Ahmed",
      role: "Security Specialist",
      bio: "Hassan ensures our systems are fortified against cyber threats.",
      imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      quote:
        "In the ever-evolving landscape of cybersecurity, we stay one step ahead to protect our users.",
    },
    {
      name: "Isabella Rodriguez",
      role: "Product Manager",
      bio: "Isabella bridges the gap between user needs and technical solutions.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      quote:
        "We're not just building products; we're crafting experiences that delight and empower our users.",
    },
    {
      name: "Isabella Rodriguez",
      role: "Product Manager",
      bio: "Isabella bridges the gap between user needs and technical solutions.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      quote:
        "We're not just building products; we're crafting experiences that delight and empower our users.",
    },
    {
      name: "Isabella Rodriguez",
      role: "Product Manager",
      bio: "Isabella bridges the gap between user needs and technical solutions.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      quote:
        "We're not just building products; we're crafting experiences that delight and empower our users.",
    },
    {
      name: "Isabella Rodriguez",
      role: "Product Manager",
      bio: "Isabella bridges the gap between user needs and technical solutions.",
      imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      quote:
        "We're not just building products; we're crafting experiences that delight and empower our users.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Meet Our Innovative Team
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`transform transition duration-500 ease-in-out ${
                hoveredIndex === index ? "scale-105" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TeamMember2 {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
