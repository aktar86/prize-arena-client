import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { PieChart } from "@mui/x-charts/PieChart";

const PieCharts = () => {
  const axiosSecure = useAxios();

  const { data: contestData = [] } = useQuery({
    queryKey: ["contests-charts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests/charts");
      return res.data;
    },
  });

  // Data filtering logic
  const getCategoryCount = (categoryName) => {
    return contestData.filter((item) => item.contestCategory === categoryName)
      .length;
  };

  const chartData = [
    {
      label: "Logo Design",
      value: getCategoryCount("Logo Design"),
      color: "#4e73df",
    },
    {
      label: "Photography",
      value: getCategoryCount("Photography"),
      color: "#1cc88a",
    },
    {
      label: "Business Idea",
      value: getCategoryCount("Business Idea"),
      color: "#f6c23e",
    },
    {
      label: "Landing Page UI",
      value: getCategoryCount("Landing Page UI"),
      color: "#e74a3b",
    },
  ];

  return (
    <div className="w-full bg-primary/10 p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold  mb-6 text-primary">
        Contest Distribution by Category
      </h2>

      <div className="flex flex-col items-center">
        {/* Pie Chart Component */}
        <PieChart
          series={[
            {
              data: chartData,
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 4,
              cx: 150, // Center x-axis
            },
          ]}
          height={250}
          slotProps={{
            legend: { hidden: true }, // Amra custom legend niche banabo
          }}
        />

        {/* Custom Stylized Legend */}
        <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-md">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 p-2 rounded-md"
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 font-bold">
                  {item.value} Contests
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
