import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Play, Award, Clock, Users2, Sparkles } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import useAuth from "../../hooks/useAuth";

const Slider = () => {
  const { darkMode } = useAuth();

  const slides = [
    {
      id: 1,
      title: "Creative Design Mastery",
      subtitle: "Global Championship 2026",
      desc: "Join the world's most prestigious design competition. Showcase your creativity, compete with top designers, and win amazing prizes including $5,000 cash and premium software licenses.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
      prize: "$5,000",
      deadline: "15 Days Left",
      participants: "2,847",
      difficulty: "Advanced",
      tags: ["Design", "Creative", "Global"],
      accentColor: "bg-gradient-to-br from-violet-500 to-purple-600",
      textAccent: "text-violet-400"
    },
    {
      id: 2,
      title: "UI/UX Innovation Hub",
      subtitle: "Future Interface Challenge",
      desc: "Design sustainable tech interfaces that solve real-world problems. Get expert feedback, build your portfolio, and connect with industry leaders in this exciting challenge.",
      image: "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
      prize: "$3,500",
      deadline: "22 Days Left",
      participants: "1,923",
      difficulty: "Intermediate",
      tags: ["UI/UX", "Tech", "Innovation"],
      accentColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      textAccent: "text-cyan-400"
    },
    {
      id: 3,
      title: "Brand Identity Sprint",
      subtitle: "48-Hour Challenge",
      desc: "Create a complete brand identity for an eco-startup in just 48 hours. Win a MacBook Pro, Wacom tablet, and get featured in our design showcase.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      prize: "MacBook Pro",
      deadline: "2 Days Left",
      participants: "3,156",
      difficulty: "Expert",
      tags: ["Branding", "Sprint", "Identity"],
      accentColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
      textAccent: "text-emerald-400"
    },
  ];

  return (
    <div className="relative mt-24 mb-12">
      <Swiper
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet modern-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active modern-bullet-active'
        }}
        autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-[70vh] rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                  <div className="max-w-4xl">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {slide.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Subtitle */}
                    <p className={`text-xl md:text-2xl font-medium mb-4 ${slide.textAccent}`}>
                      {slide.subtitle}
                    </p>
                    
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl leading-relaxed">
                      {slide.desc}
                    </p>
                    
                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-8 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${slide.accentColor}`}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Prize</p>
                          <p className="text-white font-bold text-lg">{slide.prize}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${slide.accentColor}`}>
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Deadline</p>
                          <p className="text-white font-bold text-lg">{slide.deadline}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${slide.accentColor}`}>
                          <Users2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Participants</p>
                          <p className="text-white font-bold text-lg">{slide.participants}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className={`group inline-flex items-center px-8 py-4 ${slide.accentColor} text-white font-bold rounded-2xl hover:scale-105 transform transition-all duration-300`}>
                        <Play className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                        Join Contest Now
                      </button>
                      
                      <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300">
                        <Sparkles className="w-5 h-5 mr-3" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Redesigned Floating Card */}
              <div className="absolute top-8 right-8 hidden lg:block">
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/30 min-w-[320px] transform hover:scale-105 transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 ${slide.accentColor} rounded-2xl`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Contest Details</h3>
                        <p className="text-white/60 text-sm">Live Competition</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 ${slide.accentColor} rounded-full text-white text-sm font-bold shadow-lg`}>
                      {slide.difficulty}
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white/70 text-xs uppercase tracking-wide">Status</span>
                      </div>
                      <p className="text-white font-bold text-lg">Active</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-white/70 text-xs uppercase tracking-wide">Entry</span>
                      </div>
                      <p className="text-white font-bold text-lg">Free</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-white/70 text-xs uppercase tracking-wide">Duration</span>
                      </div>
                      <p className="text-white font-bold text-lg">7 Days</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-white/70 text-xs uppercase tracking-wide">Level</span>
                      </div>
                      <p className="text-white font-bold text-lg">Pro</p>
                    </div>
                  </div>
                  
                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-semibold">Contest Progress</span>
                      <span className={`${slide.textAccent} font-bold text-lg`}>{60 + (index * 15)}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div 
                          className={`${slide.accentColor} h-3 rounded-full transition-all duration-1000 relative overflow-hidden`}
                          style={{ width: `${60 + (index * 15)}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-white/60 mt-2">
                        <span>Started</span>
                        <span>In Progress</span>
                        <span>Ending Soon</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className={`w-full ${slide.accentColor} text-white font-bold py-4 rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2`}>
                    <Sparkles className="w-5 h-5" />
                    <span>View Contest</span>
                  </button>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Slide Number */}
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center space-x-2">
                  <span className="text-white/50 text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-12 h-px bg-white/30"></div>
                  <span className="text-white/50 text-sm">
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles */}
      <style jsx>{`
        .modern-bullet {
          width: 40px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }
        
        .modern-bullet-active {
          background: white !important;
          width: 60px !important;
        }
        
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;