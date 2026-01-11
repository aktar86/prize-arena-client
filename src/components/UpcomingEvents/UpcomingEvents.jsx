import React from "react";
import { Calendar, MapPin, Bell, ArrowRight } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
// Assuming useAuth is imported from your context

const UpcomingEvents = () => {
  // Destructuring darkMode from your hook
  const { darkMode } = useAuth();
  //const darkMode = false; // Temporary for preview if you haven't connected the hook yet

  const events = [
    {
      id: 1,
      date: "March 15, 2026",
      title: "Motion Graphics Marathon",
      location: "Online / Virtual",
      category: "Animation",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      status: "Registration Opening Soon",
    },
    {
      id: 2,
      date: "April 02, 2026",
      title: "Sustainable UX Summit",
      location: "New York City & Streaming",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      status: "Early Bird Access",
    },
    {
      id: 3,
      date: "May 20, 2026",
      title: "AI & Future of Branding",
      location: "London / Global",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      status: "Accepting Waitlist",
    },
  ];

  return (
    <section
      className={`py-24 transition-colors duration-300 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2
              className={`text-4xl font-bold mb-4 tracking-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Mark Your <span className="text-blue-500">Calendars</span>
            </h2>
            <p
              className={`${
                darkMode ? "text-slate-400" : "text-slate-600"
              } text-lg`}
            >
              Don't miss out on the biggest creative challenges coming later
              this year. Get ready to compete and win.
            </p>
          </div>
          <Link
            to={"/all-contests"}
            className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors group"
          >
            View All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <div key={event.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden rounded-xl mb-6 shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 px-2">
                <div
                  className={`flex items-center gap-4 text-sm font-medium ${
                    darkMode ? "text-slate-500" : "text-slate-500 "
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {event.location}
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold transition-colors ${
                    darkMode
                      ? "text-slate-100 group-hover:text-blue-400"
                      : "text-slate-900 group-hover:text-blue-600"
                  }`}
                >
                  {event.title}
                </h3>

                <p className="text-blue-500 font-semibold text-xs uppercase tracking-[0.2em]">
                  ● {event.status}
                </p>

                <button
                  className={`w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-sm font-bold transition-all duration-300 border ${
                    darkMode
                      ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                      : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / Dark Mode Adjusted */}
        <div
          className={`mt-20 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border transition-all ${
            darkMode
              ? "bg-slate-900/50 border-slate-800 backdrop-blur-sm"
              : "bg-blue-50 border-blue-100"
          }`}
        >
          <div className="text-center md:text-left">
            <h4
              className={`text-3xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Get event alerts!
            </h4>
            <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
              We'll email you as soon as registrations open for new contests.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className={`px-6 py-4 rounded-2xl border flex-grow md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                darkMode
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  : "bg-white border-blue-200 text-slate-900"
              }`}
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
