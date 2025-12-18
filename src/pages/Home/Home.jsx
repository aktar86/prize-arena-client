import React from "react";
import PopularContest from "./PopularContest";
import WinnerAdvertisement from "./winnerAdvertisement";

const Home = () => {
  return (
    <div className="w-full m-auto max-w-[1440px] border ">
      {/* banner section */}

      {/* 2 */}
      <PopularContest />

      {/* 3 */}
      <WinnerAdvertisement />
    </div>
  );
};

export default Home;
