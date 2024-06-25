export default function TeamMember({ name, role, bio, imageUrl }) {
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
