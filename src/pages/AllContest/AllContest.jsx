import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";

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
    <div>
      <h1>All Contest Page here : {contests.length}</h1>
    </div>
  );
};

export default AllContest;
