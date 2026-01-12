import { 
  Trophy, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Services = () => {
  const { darkMode } = useAuth();

  const services = [
    {
      id: 1,
      icon: <Trophy className="w-8 h-8" />,
      title: "Contest Management",
      description: "Complete end-to-end contest management from creation to winner announcement with automated workflows.",
      features: ["Automated judging", "Real-time tracking", "Prize distribution"],
      color: "from-yellow-500 to-orange-500",
      bgColor: darkMode ? "bg-yellow-900/20" : "bg-yellow-50"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Build and engage with a vibrant community of creators, participants, and contest organizers.",
      features: ["User profiles", "Social features", "Networking tools"],
      color: "from-blue-500 to-purple-500",
      bgColor: darkMode ? "bg-blue-900/20" : "bg-blue-50"
    },
    {
      id: 3,
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Platform",
      description: "Enterprise-grade security ensuring fair play, secure transactions, and protected intellectual property.",
      features: ["Data encryption", "Fair judging", "IP protection"],
      color: "from-green-500 to-teal-500",
      bgColor: darkMode ? "bg-green-900/20" : "bg-green-50"
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Notifications",
      description: "Stay updated with real-time notifications for contest updates, deadlines, and results.",
      features: ["Email alerts", "Push notifications", "Dashboard updates"],
      color: "from-purple-500 to-pink-500",
      bgColor: darkMode ? "bg-purple-900/20" : "bg-purple-50"
    },
    {
      id: 5,
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Contests",
      description: "Find contests perfectly matched to your skills and interests with our smart recommendation system.",
      features: ["Skill matching", "Interest-based", "Difficulty levels"],
      color: "from-red-500 to-pink-500",
      bgColor: darkMode ? "bg-red-900/20" : "bg-red-50"
    },
    {
      id: 6,
      icon: <Award className="w-8 h-8" />,
      title: "Recognition System",
      description: "Earn badges, build your reputation, and showcase your achievements with our comprehensive recognition system.",
      features: ["Achievement badges", "Leaderboards", "Portfolio building"],
      color: "from-indigo-500 to-blue-500",
      bgColor: darkMode ? "bg-indigo-900/20" : "bg-indigo-50"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "500+", label: "Contests Hosted" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className={`py-16 px-4 ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Our <span className="text-primary">Services</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Comprehensive solutions for contest creators and participants, designed to make your competitive experience seamless and rewarding
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-white hover:bg-gray-50"
              } shadow-lg hover:shadow-2xl border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 ${service.bgColor} group-hover:bg-gradient-to-br group-hover:${service.color} group-hover:text-white transition-all duration-300`}>
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`rounded-xl p-8 mb-12 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                  index % 2 === 0 ? "from-[#fc466b] to-[#3f5efb]" : "from-[#3f5efb] to-[#fc466b]"
                } bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center p-8 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Ready to Get Started?
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Join Prize Arena today and experience the future of competitive creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center bg-gradient-to-r from-[#fc466b] to-[#3f5efb] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Start Competing
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className={`inline-flex items-center px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 transform hover:-translate-y-1 ${
              darkMode 
                ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700" 
                : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            }`}>
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;