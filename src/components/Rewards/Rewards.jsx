import React from "react";
import {
  Trophy,
  Laptop,
  Briefcase,
  Award,
  Crown,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Rewards = () => {
  const { darkMode } = useAuth();
  const prizeList = [
    {
      id: 1,
      title: "Grand Cash Prize",
      desc: "A massive prize pool of $10,000 for the top 3 winners. Direct bank transfers and global recognition for your talent.",
      icon: <Crown className="w-10 h-10 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      id: 2,
      title: "High-End Tech Gear",
      desc: "The champion takes home a 16-inch MacBook Pro. Runners-up receive Wacom tablets and mechanical keyboard setups.",
      icon: <Laptop className="w-10 h-10 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      id: 3,
      title: "Paid Internships",
      desc: "The top 5 finalists get direct entry into 3-month paid internship programs at leading Fortune 500 tech companies.",
      icon: <Briefcase className="w-10 h-10 text-emerald-600" />,
      color: "bg-emerald-100",
    },
    {
      id: 4,
      title: "Global Certification",
      desc: "Every participant receives a blockchain-verified digital certificate to showcase their skills on LinkedIn and resumes.",
      icon: <Award className="w-10 h-10 text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      id: 5,
      title: "Software Licenses",
      desc: "Winners receive 1-year complimentary subscriptions to Adobe Creative Cloud, Figma Professional, and Framer.",
      icon: <Trophy className="w-10 h-10 text-orange-600" />,
      color: "bg-orange-100",
    },
    {
      id: 6,
      title: "Expert Mentorship",
      desc: "Get exclusive 1-on-1 portfolio review sessions with Design Leads from Google, Meta, and Netflix.",
      icon: <Lightbulb className="w-10 h-10 text-rose-600" />,
      color: "bg-rose-100",
    },
  ];

  return (
    <section
      className={`py-24 ${darkMode ? "bg-gray-950 text-white" : "bg-slate-50"}`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`${
              darkMode && "text-white"
            } text-4xl font-extrabold text-slate-900 mb-6 tracking-tight`}
          >
            Beyond the{" "}
            <span className={`${darkMode && "text-white"} text-blue-600`}>
              Prizes
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
            We don't just reward the best work; we provide the fuel for your
            professional growth and career breakthroughs.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {prizeList.map((prize) => (
            <div
              key={prize.id}
              className=" p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div
                className={`${prize.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform duration-300`}
              >
                {prize.icon}
              </div>
              <h3
                className={`${
                  darkMode
                    ? "text-white text-2xl font-bold"
                    : "text-2xl font-bold text-slate-800 mb-4 tracking-tight"
                }`}
              >
                {prize.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {prize.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-12 text-center text-white">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">
              Ready to claim your rewards?
            </h3>
            <p className="mb-10 text-slate-300 text-lg max-w-xl mx-auto">
              Join thousands of creators competing in the most prestigious
              design challenge of 2026.
            </p>
            <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
              Register for the Contest
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500/20 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/20 blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
