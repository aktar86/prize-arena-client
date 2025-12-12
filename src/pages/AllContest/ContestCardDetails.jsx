import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";

const ContestCardDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxios();

  const { isLoading, data: contest } = useQuery({
    queryKey: ["contest", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <p>Loading...</p>;
  if (!contest) return <p>No contest found!</p>;

  console.log(contest);

  return (
    <div>
      <h1>Contest Card Details</h1>
      <h1>{contest.contestTitle}</h1>
    </div>
  );
};

export default ContestCardDetails;
