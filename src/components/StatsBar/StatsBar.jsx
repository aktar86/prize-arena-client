import React from "react";

const StatsBar = ({ totals = [] }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-5">
      {totals.map((total) => (
        <div
          key={total.id}
          className=" text-center p-5 rounded-xl shadow-sm hover:scale-102 transform transition-all duration-200 ease-in-out bg-linear-to-r from-blue-500 to-blue-700 text-white"
        >
          <h2 className="font-black text-6xl text-white">{total.value}</h2>
          <p className="uppercase">{total.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
