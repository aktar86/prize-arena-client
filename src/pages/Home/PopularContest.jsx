import React from "react";
import ContestCard from "../AllContest/ContestCard";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const PopularContest = ({ contestsTrim }) => {
  const { darkMode } = useAuth();
  const nagvigate = useNavigate();

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white"} py-10`}>
      <div>
        <h1 className="text-3xl font-bold text-center">
          Popular <span className="text-primary">Contest</span>
        </h1>
        <p className="md:max-w-7/11 mx-auto text-center">
          Discover our most exciting and highly participated contests. These
          contests attract the highest number of participants, offer great
          rewards, and showcase top creativity and talent from our community.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {contestsTrim.map((contest) => (
          <ContestCard contest={contest} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => nagvigate("/all-contests")}
          className={`px-5 mt-2 flex items-center justify-center gap-2 py-3 rounded-sm font-bold transition-all duration-300 border ${
            darkMode
              ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
              : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
          }`}
        >
          See All Contest
        </button>
      </div>
    </div>
  );
};

export default PopularContest;
