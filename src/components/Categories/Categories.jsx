import { useState } from "react";
import { Link } from "react-router";
import { 
  Palette, 
  Camera, 
  Lightbulb, 
  Monitor,
  ArrowRight,
  Trophy
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Categories = () => {
  const { darkMode } = useAuth();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Logo Design",
      description: "Create stunning logos and brand identities that capture the essence of businesses and organizations.",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: darkMode ? "bg-purple-900/20" : "bg-purple-50",
      borderColor: "border-purple-200",
      count: "25+ Contests"
    },
    {
      id: 2,
      name: "Photography",
      description: "Showcase your photography skills through creative challenges and visual storytelling competitions.",
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: darkMode ? "bg-blue-900/20" : "bg-blue-50",
      borderColor: "border-blue-200",
      count: "30+ Contests"
    },
    {
      id: 3,
      name: "Business Idea",
      description: "Present innovative business concepts and entrepreneurial solutions to real-world challenges.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: darkMode ? "bg-yellow-900/20" : "bg-yellow-50",
      borderColor: "border-yellow-200",
      count: "20+ Contests"
    },
    {
      id: 4,
      name: "Landing Page UI",
      description: "Design beautiful and functional user interfaces for websites and landing pages.",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      bgColor: darkMode ? "bg-green-900/20" : "bg-green-50",
      borderColor: "border-green-200",
      count: "18+ Contests"
    }
  ];

  return (
    <div className={`py-16 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Contest <span className="text-primary">Categories</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Explore different contest categories and find the perfect competition to showcase your skills and creativity
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg hover:shadow-2xl border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${category.bgColor} ${
                  hoveredCategory === category.id ? `bg-gradient-to-br ${category.color} text-white` : "text-primary"
                } transition-all duration-300`}>
                  {category.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {category.name}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {category.description}
                </p>

                {/* Contest Count */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                    {category.count}
                  </span>
                  <div className={`flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300`}>
                    <span className="text-sm font-medium mr-1">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center p-8 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-primary mr-2" />
            <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Ready to Compete?
            </h3>
          </div>
          <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Join thousands of creators and compete in exciting contests across all categories
          </p>
          <Link
            to="/all-contests"
            className="inline-flex items-center bg-linear-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Contests
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;