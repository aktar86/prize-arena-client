import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import ContestCard from "../AllContest/ContestCard";
import { useNavigate } from "react-router";
import { CloudSnow } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const PopularContest = () => {
  const { darkMode } = useAuth();
  const axiosSecure = useAxios();
  const nagvigate = useNavigate();
  const { data: contests = [] } = useQuery({
    queryKey: ["popular-contest", "Confirmed"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests?status=Confirmed");
      return res.data;
    },
  });

  const contestsTrim = contests.slice(0, 6);

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
          className="text-lg  bg-linear-to-r from-primary to-secondary px-3 text-white py-2  cursor-pointer"
        >
          See All Contest
        </button>
      </div>
    </div>
  );
};

export default PopularContest;
