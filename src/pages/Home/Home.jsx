import React, { useState } from "react";
import PopularContest from "./PopularContest";
import WinnerAdvertisement from "./WinnerAdvertisement";
import BannerSection from "./BannerSection";
import useAuth from "../../hooks/useAuth";
import BannerSectionTwo from "./BannerSectionTwo";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Slider from "./slider";
import Rewards from "../../components/Rewards/Rewards";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  const { darkMode } = useAuth();
  const axiosSecure = useAxios();
  const [searchText, setSearchText] = useState("");

  const { data: contestsData = {} } = useQuery({
    queryKey: ["popular-contest", "Confirmed", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?status=Confirmed&searchText=${searchText}`
      );
      return res.data;
    },
  });

  const contests = contestsData.contests || [];

  const contestsTrim = contests.slice(0, 6);

  return (
    <div
      className={`w-full m-auto max-w-[1440px]  ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* slider */}
      <Slider />
      {/* banner section */}
      {/* <BannerSection /> */}
      <BannerSectionTwo setSearchText={setSearchText} />

      {/* 2 */}
      <PopularContest contestsTrim={contestsTrim} />

      {/* 3 */}
      <WinnerAdvertisement />

      {/* 4 */}
      <FeatureSection />

      {/* 5  */}
      <Rewards />
      {/* 6  */}
      <UpcomingEvents />
    </div>
  );
};

export default Home;
