import React from "react";
import useAuth from "../../hooks/useAuth";

const ContactUs = () => {
  const { darkMode } = useAuth();

  return (
    <section
      className={`w-full min-h-screen py-40 px-4 ${
        darkMode
          ? "bg-gradient-to-br from-[#0B1220] via-[#0F1B33] to-[#0B1220] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in touch
          </h2>
          <p className="mb-6 leading-relaxed">
            Have questions about contests, rewards, or creators? Reach out to
            Prize Arena — we’re here to help you win big.
          </p>

          <div className="space-y-4">
            <p>📍 Sylhet, Bangladesh</p>
            <p>📞 +880 1728-456744</p>
            <p>✉️ support@prizearena.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div
          className={`rounded-2xl p-6 md:p-8 border shadow-lg ${
            darkMode
              ? "bg-white/5 border-white/10 backdrop-blur-xl"
              : "bg-gray-100 border-gray-200"
          }`}
        >
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">First name</label>
                <input
                  type="text"
                  className={`w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "bg-[#111827] border-white/10 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
              <div>
                <label className="text-sm">Last name</label>
                <input
                  type="text"
                  className={`w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? "bg-[#111827] border-white/10 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                className={`w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-[#111827] border-white/10 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label className="text-sm">Phone number</label>
              <input
                type="text"
                className={`w-full mt-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-[#111827] border-white/10 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                rows="4"
                className={`w-full mt-1 px-4 py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  darkMode
                    ? "bg-[#111827] border-white/10 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
