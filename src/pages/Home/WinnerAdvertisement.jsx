import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Trophy, Crown, Star, Award } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import useAuth from "../../hooks/useAuth";

const WinnerAdvertisement = () => {
  const axiosSecure = useAxios();
  const { darkMode } = useAuth();

  const { data: winners = [] } = useQuery({
    queryKey: ["winners"],
    queryFn: async () => {
      const res = await axiosSecure.get("recent-winner");
      return res.data;
    },
  });

  return (
    <div className={`py-16 px-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-gray-50 to-gray-100"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">

          <h1 className={`text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Your Name <span className="text-primary">Could Be Next!</span>
          </h1>
          
          <p className={` max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Turning your skills into rewards has never been easier. Join thousands of creators who have already claimed their spot in the winners' circle. Your talent deserves to be celebrated—step up, compete, and let the world see what you're capable of!
          </p>
        </div>

        {/* Winners Carousel */}
        <div className="relative">
          <Swiper
            loop={true}
            spaceBetween={30}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              scale: 0.85,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet winner-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active winner-bullet-active'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="winner-swiper pb-16"
          >
            {winners.map((winner, index) => (
              <SwiperSlide key={winner._id}>
                <div className="group relative">
                  {/* Winner Card */}
                  <div className={`relative overflow-hidden rounded-2xl p-6 transform transition-all duration-500 group-hover:scale-105 ${
                    darkMode 
                      ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700" 
                      : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                  } shadow-xl group-hover:shadow-2xl`}>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-2 right-2">
                        <Trophy className="w-16 h-16 text-yellow-500" />
                      </div>
                    </div>

                    {/* Winner Badge */}
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                        🏆 Winner
                      </div>
                    </div>

                    {/* Profile Section */}
                    <div className="relative z-10 text-center mb-4">
                      <div className="relative inline-block mb-3">
                        <img
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-lg"
                          src={winner.winner.photoUrl}
                          alt={winner.winner.name}
                        />
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-full">
                          <Crown className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <h3 className={`text-lg md:text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                        {winner.winner.name}
                      </h3>
                      
                      <div className="bg-gradient-to-r from-[#fc466b] to-[#3f5efb] text-white px-3 py-1 rounded-full inline-block font-bold text-sm mb-3">
                        Won ${winner.contestPrizeMoney}
                      </div>
                    </div>

                    {/* Contest Details */}
                 

                    {/* Rank Badge */}
                    <div className="absolute bottom-3 right-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                        index === 0 ? "bg-gradient-to-r from-yellow-400 to-orange-500" :
                        index === 1 ? "bg-gradient-to-r from-gray-400 to-gray-600" :
                        index === 2 ? "bg-gradient-to-r from-orange-400 to-red-500" :
                        "bg-gradient-to-r from-purple-400 to-pink-500"
                      }`}>
                        #{index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Join the Winners Circle
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .winner-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(252, 70, 107, 0.3) !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .winner-bullet-active {
          background: linear-gradient(45deg, #fc466b, #3f5efb) !important;
          transform: scale(1.3) !important;
        }
        
        .winner-swiper {
          padding: 20px 0;
        }
        
        .winner-swiper .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default WinnerAdvertisement;