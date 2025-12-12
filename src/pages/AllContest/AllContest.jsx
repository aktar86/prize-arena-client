import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import ContestCard from "./ContestCard";

const AllContest = () => {
  const axiosSecure = useAxios();
  const { data: contests = [] } = useQuery({
    queryKey: ["approved-contest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests?status=Confirmed");
      return res.data;
    },
  });
  return (
    <div className="w-full max-w-[1440px] mx-auto border">
      <h1 className="text-4xl font-bold">All Contest : {contests.length}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {contests.map((contest) => (
          <ContestCard key={contest._id} contest={contest}></ContestCard>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
