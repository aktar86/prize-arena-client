import { useState, useEffect } from "react";
import PopularContest from "./PopularContest";
import WinnerAdvertisement from "./WinnerAdvertisement";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Slider from "./slider";
import Rewards from "../../components/Rewards/Rewards";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import FAQ from "../../components/FAQ/FAQ";
import Categories from "../../components/Categories/Categories";
import Services from "../../components/Services/Services";
import { useSearch } from "../../context/SearchContext";
import ContestCard from "../AllContest/ContestCard";

const Home = () => {
  const { darkMode } = useAuth();
  const axiosSecure = useAxios();
  const { searchText } = useSearch();

  const { data: contestsData = {} } = useQuery({
    queryKey: ["popular-contest", "Confirmed", searchText],
    queryFn: async () => {
      let url = `/contests?status=Confirmed`;
      if (searchText) {
        url += `&searchText=${encodeURIComponent(searchText)}`;
      }
      const res = await axiosSecure.get(url);
      return res.data;
    },
  });

  const contests = contestsData.contests || [];
  const contestsTrim = contests.slice(0, 6);

  // Show search results if there's search text
  const showSearchResults = searchText && searchText.trim().length > 0;

  return (
    <div
      className={`w-full m-auto max-w-[1440px]  ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {showSearchResults ? (
        // Search Results Section
        <div className="px-4 py-8">
          <div className="text-center mb-8">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
              Search Results for "{searchText}"
            </h2>
            <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Found {contests.length} contest{contests.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          {contests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {contests.map((contest) => (
                <ContestCard key={contest._id} contest={contest} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className={`text-6xl mb-4 ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
                🔍
              </div>
              <h3 className={`text-4xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                No contests found
              </h3>
              <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                Try searching with different keywords or browse all contests
              </p>
            </div>
          )}
        </div>
      ) : (
        // Normal Home Page Content
        <>
          {/* slider */}
          <Slider />

          {/* 2 */}
          <PopularContest contestsTrim={contestsTrim} />

          {/* 3 */}
          <WinnerAdvertisement />

          {/* 4 */}
          <FeatureSection />

          {/* 5 - Services Section */}
          <Services />

          {/* 6 - Categories Section */}
          <Categories />

          {/* 7  */}
          <Rewards />
          {/* 8  */}
          <UpcomingEvents />
          {/* 9 - FAQ Section */}
          <FAQ />
        </>
      )}
    </div>
  );
};

export default Home;
