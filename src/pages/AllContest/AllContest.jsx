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
  const [currentPage, setCurrentPage] = useState(1); // page starts from 1
  const itemsPerPage = 10;

  const { isLoading, data = {} } = useQuery({
    queryKey: ["approved-contest", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/contests?status=Confirmed&page=${currentPage}&limit=${itemsPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const contests = data.contests || [];
  const total = data.total || 0;
  const totalPages = data.totalPages || 1;

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
      className={`w-full max-w-[1440px] mx-auto ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      {/* Tabs */}
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
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1); // reset page on tab change
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Heading */}
      <div className="md:max-w-8/12 mx-auto text-center py-10">
        <h1 className="text-4xl font-bold">
          All <span className="text-primary">Contest</span>
        </h1>
        <p>
          Participate in this contest to showcase your talent, compete fairly,
          gain recognition, and win exciting prizes while enjoying a fun,
          creative, and rewarding experience for everyone across all contest
          categories.
        </p>
      </div>

      {/* Total */}
      <p className="pl-3 mb-4">
        Total Contest:{" "}
        <span className="text-secondary font-semibold">
          {total < 10 ? "0" + total : total}
        </span>
      </p>

      {/* Contest Cards */}
      {isLoading ? (
        <Loder />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredContests.map((contest) => (
            <ContestCard key={contest._id} contest={contest} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2 my-10">
        <button
          className="btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={`btn ${currentPage === num + 1 ? "btn-primary" : ""}`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}

        <button
          className="btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllContest;
