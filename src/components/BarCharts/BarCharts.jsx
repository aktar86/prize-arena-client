import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const BarCharts = () => {
  const axiosSecure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users", "winners"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/wins`);
      return res.data;
    },
  });

  console.log(users);

  // 1. Data processing: Top 5 ba 10 jon user-ke nite paren leaderboard-er jonno
  // Dhore nichchi user object-e 'winCount' (ba apnar DB te thaka field) ache.
  const chartData = users.slice(0, 5).map((user) => ({
    name: user.displayName
      ? user.displayName.split(" ")[0].toUpperCase()
      : "Unknown",
    wins: user.wins || 0, // database-e win count field-er nam check korben
  }));

  return (
    <div className="w-full bg-gray-300 p-4  rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-primary mb-4">
        Top Winners Performance
      </h2>

      {chartData.length > 0 ? (
        <BarChart
          dataset={chartData}
          xAxis={[
            {
              scaleType: "band",
              dataKey: "name",
              label: "Users",
            },
          ]}
          series={[
            {
              dataKey: "wins",
              label: "Contests Won",
              color: "#4e73df",
            },
          ]}
          height={400}
          margin={{ top: 20, bottom: 50, left: 40, right: 10 }}
        />
      ) : (
        <p>No user data available for chart</p>
      )}
    </div>
  );
};

export default BarCharts;
