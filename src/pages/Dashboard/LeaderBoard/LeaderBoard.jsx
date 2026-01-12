import React from "react";
// import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import PieCharts from "../../../components/PieCharts/PieCharts";

import BarCharts from "../../../components/BarCharts/BarCharts";
import UsersTable from "./usersTable";
import StatsBar from "../../../components/StatsBar/StatsBar";

const LeaderBoard = () => {
  // const { role } = useRole();
  const axiosSecure = useAxios();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/leaderboard?role=user");
      return res.data;
    },
  });

  const { data: totalDataCounts = {} } = useQuery({
    queryKey: ["total-data-counts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/estimated-counts");
      return res.data;
    },
  });

  const totals = [
    { id: 1, label: "Total Users", value: totalDataCounts?.users ?? 0 },
    { id: 2, label: "Total creators", value: totalDataCounts?.creators ?? 0 },
    { id: 3, label: "Total contests", value: totalDataCounts?.contests ?? 0 },
    {
      id: 4,
      label: "Total participants",
      value: totalDataCounts?.participants ?? 0,
    },
  ];

  console.log(totals);
  const usersData = users.slice(0, 6);
  return (
    <>
      <div className="p-10">
        <StatsBar totals={totals} />
        <div className="flex flex-col lg:flex-row gap-5 ">
          {/* username and win contest count latest */}
          <div className="flex-1 ">
            <BarCharts />
          </div>
          {/* category data */}
          <div className="flex-1">
            <PieCharts />
          </div>
        </div>

        {/* users data latest 6 person */}
        <div className="mt-10  p-5 rounded-xl shadow-sm bg-primary/80 text-white">
          <UsersTable usersData={usersData} />
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
