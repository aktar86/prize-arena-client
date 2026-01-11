import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Global Design Championship 2026",
      desc: "Step into the spotlight and showcase your visual storytelling skills. Compete against top-tier designers worldwide for a chance to win $5,000, premium software subscriptions, and a featured spot in our annual digital gallery.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "The Ultimate UI/UX Innovator Challenge",
      desc: "Solve real-world problems through user-centric design. This month’s challenge focuses on sustainable tech interfaces. Join a community of innovators, receive expert feedback on your portfolio, and catch the eye of industry-leading tech recruiters.",
      image:
        "https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg",
    },
    {
      id: 3,
      title: "Brand Identity Sprint: Win Your Dream Gear",
      desc: "Reimagine the branding for a fictional eco-startup in 48 hours. The grand prize winner takes home a brand-new 16-inch MacBook Pro and a high-end Wacom tablet. Put your speed and creativity to the ultimate test today!",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    },
  ];

  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay]}
      className="w-full h-[300px] md:h-[600px] rounded-xl overflow-hidden mt-25 "
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-full w-full bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black/50 w-full h-full md:flex  items-center hidden">
              <div className="max-w-7xl mx-auto px-6 text-white absolute left-0 bottom-20">
                <h2 className="text-3xl  font-bold mb-3">{slide.title}</h2>
                <p className="text-lg md:text-xl  ">{slide.desc}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
