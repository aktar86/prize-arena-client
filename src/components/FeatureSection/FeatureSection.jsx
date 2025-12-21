import React from "react";
import { FaGamepad, FaTrophy, FaUsers, FaShieldAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const FeatureSection = () => {
  const { darkMode } = useAuth();
  const features = [
    {
      id: 1,
      icon: <FaGamepad className="text-4xl text-blue-500" />,
      title: "Multiple Games",
      description:
        "Play your favorite titles like PUBG, Free Fire, and more in one place.",
    },
    {
      id: 2,
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "Big Prizes",
      description:
        "Compete in daily tournaments and win exciting cash rewards and prizes.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-4xl text-green-500" />,
      title: "Active Community",
      description:
        "Join thousands of gamers, share tips, and grow your gaming network.",
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-4xl text-red-500" />,
      title: "Fair Play",
      description:
        "Advanced anti-cheat systems to ensure a fair and competitive environment.",
    },
  ];

  return (
    <div
      className={`py-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Join Prize Arena?
          </h2>
          <div className="w-40 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${
                darkMode ? "bg-gray-900 text-white" : "bg-white"
              } p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 text-center `}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
