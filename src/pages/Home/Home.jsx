import React, { useState } from "react";
import PopularContest from "./PopularContest";
import WinnerAdvertisement from "./WinnerAdvertisement";
import BannerSection from "./BannerSection";
import useAuth from "../../hooks/useAuth";
import BannerSectionTwo from "./BannerSectionTwo";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FeatureSection from "../../components/FeatureSection/FeatureSection";

const Home = () => {
  const { darkMode } = useAuth();
  const axiosSecure = useAxios();
  const [searchText, setSearchText] = useState("");

  const { data: contests = [] } = useQuery({
    queryKey: ["popular-contest", "Confirmed", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?status=Confirmed&searchText=${searchText}`
      );
      return res.data;
    },
  });

  console.log(contests);
  const contestsTrim = contests.slice(0, 6);
  // contestsTrim = { contestsTrim };

  return (
    <div
      className={`w-full m-auto max-w-[1440px]  ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* banner section */}
      {/* <BannerSection /> */}
      <BannerSectionTwo searchText={searchText} setSearchText={setSearchText} />

      {/* 2 */}
      <PopularContest contestsTrim={contestsTrim} />

      {/* 3 */}
      <WinnerAdvertisement />

      {/* 4 */}
      <FeatureSection />
    </div>
  );
};

export default Home;
