import React from "react";
// import useRole from "../../../hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import PieCharts from "../../../components/PieCharts/PieCharts";

import BarCharts from "../../../components/BarCharts/BarCharts";
import UsersTable from "./usersTable";

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

  const usersData = users.slice(0, 6);
  return (
    <>
      <div className="flex gap-5">
        <div className="flex-1">
          <BarCharts users={users} />
        </div>
        <div className="flex-1">
          <PieCharts />
        </div>
      </div>
      <UsersTable usersData={usersData} />
    </>
  );
};

export default LeaderBoard;
