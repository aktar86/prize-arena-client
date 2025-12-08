import React from "react";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        onClick={() => navigate("/")}
        className="font-bold text-3xl cursor-pointer"
      >
        Prize
        <span className="text-primary">Arena</span>
      </h1>
    </div>
  );
};

export default Logo;
