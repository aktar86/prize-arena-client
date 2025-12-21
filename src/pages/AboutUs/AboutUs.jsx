import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AboutUs = () => {
  const { darkMode } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className={`w-full max-w-[1440px] mx-auto ${
        darkMode ? "bg-black text-white" : "bg-white"
      } font-sans`}
    >
      {/* Hero Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Prize Arena
          </h1>
          <p className="text-lg md:text-xl ">
            Where talent meets opportunity. We provide a secure and transparent
            platform for creators to host contests and for participants to
            showcase their skills and win amazing prizes.
          </p>
        </div>
      </div>

      {/* Main Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`text-3xl font-bold ${
                darkMode && "text-white"
              } text-gray-900 mb-6 border-l-4 border-indigo-600 pl-4`}
            >
              Our Mission
            </h2>
            <p
              className={`${
                darkMode && "text-white"
              } text-gray-600 text-lg mb-6`}
            >
              At <strong>Prize Arena</strong>, our mission is to democratize
              talent recognition. We believe every skill, whether it’s coding,
              design, or writing, deserves a stage and a reward.
            </p>
            <p
              className={`${
                darkMode && "text-white"
              } text-gray-600 text-lg mb-6`}
            >
              By leveraging cutting-edge technology like{" "}
              <strong>Firebase Authentication</strong> for security and
              <strong> Stripe</strong> for seamless transactions, we ensure a
              safe environment for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Secure Payments</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">Fair</h3>
              <p className="text-gray-700 font-medium">Winner Selection</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">Live</h3>
              <p className="text-gray-700 font-medium">Contest Tracking</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-green-600 mb-2">Global</h3>
              <p className="text-gray-700 font-medium">Community</p>
            </div>
          </div>
        </div>

        {/* How It Works - Step by Step */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center  mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div
              className={`relative p-8 ${
                darkMode ? "bg-gray-900 text-white" : " bg-white"
              } border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h4 className="text-xl font-bold mb-4 ">Explore Contests</h4>
              <p>
                Browse through various categories like Web Development,
                Graphics, and Literature to find your match.
              </p>
            </div>
            {/* Step 2 */}
            <div
              className={`relative p-8 ${
                darkMode ? "bg-gray-900 text-white" : " bg-white"
              } border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h4 className="text-xl font-bold mb-4 ">Register & Pay</h4>
              <p>
                Secure your spot by paying the entry fee through Stripe. Your
                unique Tracking ID ensures your entry is recorded.
              </p>
            </div>
            {/* Step 3 */}
            <div
              className={`relative p-8 ${
                darkMode ? "bg-gray-900 text-white" : " bg-white"
              } border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow`}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h4 className="text-xl font-bold mb-4 ">Win & Celebrate</h4>
              <p>
                Submit your project before the deadline. Winners are selected
                fairly and rewards are distributed instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-24  p-10 md:p-16 text-center ">
          <h2 className="text-3xl font-bold mb-6">
            Our Commitment to Fairness
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Every contest hosted on Prize Arena is monitored for integrity. We
            ensure that every participant's submission is reviewed by the
            creators, and winners are declared based strictly on merit.
          </p>
          <button
            onClick={() => navigate("/all-contests")}
            className="bg-linear-to-r from-primary to-secondary hover:opacity-80 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
          >
            Join a Contest Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
