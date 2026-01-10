import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarCharts = ({ users = [] }) => {
  // 1. Data processing: Top 5 ba 10 jon user-ke nite paren leaderboard-er jonno
  // Dhore nichchi user object-e 'winCount' (ba apnar DB te thaka field) ache.
  const chartData = users.slice(0, 7).map((user) => ({
    name: user.displayName
      ? user.displayName.split(" ")[0].toUpperCase()
      : "Unknown",
    wins: user.wins || 0, // database-e win count field-er nam check korben
  }));

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-secondary mb-4">
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
