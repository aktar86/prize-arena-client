import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imageIcon from "../../assets/user.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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

  console.log(winners);
  return (
    <div
      className={`py-15 ${
        darkMode ? "bg-gray-900 text-white" : "bg-secondary/5"
      }`}
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold ">
          Your Name <span className="text-primary">Could Be Next!</span>
        </h1>
        <p className="max-w-8/12 mx-auto mt-3">
          Turning your skills into rewards has never been easier. Join thousands
          of creators who have already claimed their spot in the winners'
          circle. Your talent deserves to be celebrated—step up, compete, and
          let the world see what you’re capable of!
        </p>
      </div>
      <div>
        {/* cover flow effect parameter */}
        <Swiper
          loop={true}
          spaceBetween={20}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 20,
            stretch: "50%",
            depth: 200,
            scale: 0.75,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {winners.map((winner) => (
            <SwiperSlide key={winner._id} className="flex ">
              {/* linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%) */}
              {/* from-primary to-secondary  */}
              {/* bg-[linear-gradient(45deg,_#3a47d5,_#00d2ff)] */}
              {/*  bg-linear-to-r from-[#3a47d5] to-[#00d2ff] */}
              <div className="max-w-md bg-linear-to-r from-primary to-secondary text-white flex gap-5 rounded-xl py-10 p-5">
                <img
                  className="w-30 h-30 object-cover rounded-4xl ring-3 ring-white"
                  src={winner.winner.photoUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-2xl font-semibold">
                    {winner.winner.name}
                  </h3>
                  <h3 className="text-xl text-orange-300 font-bold">
                    Won: $ {winner.contestPrizeMoney}
                  </h3>
                  <p className=" text-sm mt-1">In: {winner.contestTitle}</p>
                  <p className=" text-xs mt-1">
                    Created by- <br /> {winner.creatorName}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WinnerAdvertisement;

/**
 *    <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            
            <div className="relative">
              <img
                src={Winner.winner.photoUrl}
                className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-secondary"
              />
              <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                Champion
              </div>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-xl font-bold ">{Winner.winner.name}</h3>
              <p className="text-secondary font-medium">
                Won ${Winner.contestPrizeMoney}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                In: {Winner.contestTitle}
              </p>
            </div>

            linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)
          </div>
 */
