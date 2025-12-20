import React from "react";
import useRole from "../../../hooks/useRole";

const LeaderBoard = () => {
  const { role } = useRole();
  console.log(role);
  return (
    <div>
      <h1 className="text-5xl font-bold">Leaderboard : {role}</h1>
    </div>
  );
};

export default LeaderBoard;
