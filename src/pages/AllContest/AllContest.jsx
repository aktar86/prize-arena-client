import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../hooks/useAxios";
import ContestCard from "./ContestCard";
import useAuth from "../../hooks/useAuth";
import Loder from "../../components/Loder/Loder";

const AllContest = () => {
  const { darkMode } = useAuth();
  const axiosSecure = useAxios();
  const [activeTab, setActiveTab] = useState("All");

  const { isLoading, data: contests = [] } = useQuery({
    queryKey: ["approved-contest", "Confirmed"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests?status=Confirmed");
      return res.data;
    },
  });
  const tabs = [
    "All",
    "Logo Design",
    "Photography",
    "Business Idea",
    "Landing Page UI",
  ];
  const filteredContests =
    activeTab === "All"
      ? contests
      : contests.filter((contest) => contest.contestCategory === activeTab);

  return (
    <div
      className={`w-full max-w-[1440px] mx-auto  ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* tabs  */}
      <div className="tabs tabs-boxed mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab font-semibold ${
              activeTab === tab
                ? "text-primary"
                : darkMode
                ? "text-gray-400"
                : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* contests */}

      <div className="md:max-w-8/12 mx-auto text-center py-10 ">
        <h1 className="text-4xl font-bold text-center ">
          All <span className="text-primary">Contest</span>
        </h1>
        <p>
          Participate in this contest to showcase your talent, compete fairly,
          gain recognition, and win exciting prizes while enjoying a fun,
          creative, and rewarding experience for everyone across all contest
          categories.
        </p>
      </div>
      <p className="pl-3">
        Total Contest:{" "}
        <span className="text-secondary ">
          {filteredContests.length < 10
            ? "0" + filteredContests.length
            : filteredContests.length}
        </span>{" "}
      </p>

      {isLoading ? (
        <Loder />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredContests.map((contest) => (
            <ContestCard key={contest._id} contest={contest}></ContestCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllContest;
